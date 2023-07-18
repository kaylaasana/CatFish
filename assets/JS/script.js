// element selectors
var backpackBtn = document.querySelector("#closed");
var backpackModal = document.querySelector("#backpack-modal");
var exitBackpackBtn = document.querySelector("#exit-backpack");
var inventoryBody = document.querySelector("#inventory-body");
var wallet = document.querySelector("#money");
var exclamationMark = document.querySelector("#bite-reaction");
var reelInButton = document.querySelector("#reel-btn");
var successModal = document.querySelector("#success-modal");
var failureModal = document.querySelector("#failure-modal");
var closingBtns = document.querySelectorAll(".closeModal");
var castBtn = document.querySelector("#cast-btn");
var storeBtn = document.querySelector("#store");
var storeModal = document.querySelector("#store-modal");
var exitStoreBtn = document.querySelector("#exit-store");
var fishNameinModal = document.querySelector("#fish-name");
var fishImage = document.querySelector("#fish-image");
var fishImageOnWater = document.querySelector("#fish-on-water");
var buyFactBtn = document.querySelector("#cat-fact-btn");
var catFact = document.querySelector("#cat-fact");
var angryCat = document.querySelector("#angry-store-cat");
var storeCat = document.querySelector("#store-cat");
var closedBackpack = document.querySelector("#closed");
var openedBackpack = document.querySelector("#open");
var mainBox = document.querySelector("#main-box");
// element selectors for fish guy
var sellToCj = document.querySelector("#cj");
var cjModal = document.querySelector("#cj-modal-inv");
var closeCjModal = document.querySelector("#exit-cj-modal");

// global variables
var inventory = {
  fishIcon: "",
  fishName: "",
  fishPrice: "",
  fishImg: "",
  cjPrice: ""
  // fish guy price
};
var factPrice = 5000;
var timeInterval;
// variable for checking the amount of click the user made for reel-in
var reelInHit = 0;

// functions
// change char img
var castBtn = document.querySelector("#cast-btn");
var standingCat = document.querySelector("#standing-cat");
var fishingCat = document.querySelector("#fishing-cat");

if(localStorage.getItem("wallet")) {
  getWallet()
}

function getWallet() {
  wallet.textContent = localStorage.getItem("wallet")
}


castBtn.addEventListener("click", function () {
  standingCat.classList.add("hidden");
  fishingCat.classList.remove("hidden");
});

// delays fish bite
function setCastingTime() {
  // get a random number for how long it should delay between
  var delay = getRandomNumber(8000, 5000);
  // after certain amount of time, make the reel in available
  setTimeout(function () {
    // sets the exclamation mark (on bite)
  }, delay);
}

// store fish function
// cast rod function
function castRod() {
  castBtn.classList.add("hidden");
  // gets random fish data from animal crossing api
  var axUrl = "https://acnhapi.com/v1/fish/";
  // fetch request to get data
  fetch(axUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // get random number to get random fish data from animal crossing api
      // make an array of keys
      var dataKeys = Object.keys(data);

      // get a random number between key length and 0 (inclusive)
      var randomNum = getRandomNumber(dataKeys.length - 1, 0);

      // a random key from the data
      var fishKey = dataKeys[randomNum];

      // random fish from the data set
      var randomFish = data[fishKey];

      // add the data set to inventory object
      inventory.fishName = randomFish.name["name-USen"];
      inventory.fishPrice = randomFish.price;
      inventory.fishIcon = randomFish.icon_uri;
      inventory.cjPrice = randomFish["price-cj"]
      // add higher prices to JUST cj inventory

      inventory.fishImg = randomFish.image_uri;

      setCastingTime();
    });
}

// delays fish bite
function setCastingTime() {
  // get a random number for how long it should delay between
  var delay = getRandomNumber(8000, 5000);
  // after certain amount of time, make the reel in available
  setTimeout(function () {
    // sets the exclamation mark (on bite)
    exclamationMark.classList.remove("hidden");

    // triggers reel-in
    reelIn();

    // sets time interval
    reelInInterval();
  }, delay);
}

// reel fish function
function reelIn() {
  // displays reelIn button on random place on screen
  reelInButton.classList.remove("hidden");
  // get random number for position x
  var posX = getRandomNumber(90, 0);
  var posY = getRandomNumber(90, 0);

  // moves the button to random position
  reelInButton.style.left = posX + "%";
  reelInButton.style.top = posY + "%";

  // increases hit counter
  reelInHit++;
  if (reelInHit >= 5) {
    // displays successs modal
    displaySuccessModal();

    // clears time interval
    clearInterval(timeInterval);

    // randomly display cj
    getFishGuy();

    // make the fish name available
    fishNameinModal.textContent = inventory.fishName;
    fishImage.src = inventory.fishImg;
    fishImageOnWater.src = inventory.fishImg;
    fishImageOnWater.classList.remove("hidden");
    // hides reel in button
    reelInButton.classList.add("hidden");

    // hide exclamation mark
    exclamationMark.classList.add("hidden");

    // resets hit counter
    reelInHit = 0;
  }
}

// set interval timer for reeling in fish
function reelInInterval() {
  var timeCount = 0;
  timeInterval = setInterval(function () {
    timeCount++;
    // if the user takes too long to reel in
    if (timeCount >= 5 && reelInHit < 5) {
      reelInHit = 0;
      console.log("failure!");
      clearInterval(timeInterval);
      displayFailureModal();

      // replaces standing cat with fishing cat
      standingCat.classList.remove("hidden");
      fishingCat.classList.add("hidden")

      // hides reel in button
      reelInButton.classList.add("hidden");

      // hide exclamation mark
      exclamationMark.classList.add("hidden");

      // re display cast button
      castBtn.classList.remove("hidden");
    }
  }, 1000);
}

// update inventory
function addToInventory() {
  // create table row element
  var inventoryRow = document.createElement("tr");
  // create table data elements for each data point for that inventory item and append to table row
  var fishIconRow = document.createElement("td");
  var fishIconTag = document.createElement('img');
  fishIconTag.src = inventory.fishIcon;
  fishIconRow.append(fishIconTag);
  inventoryRow.append(fishIconRow);

  var fishNameRow = document.createElement("td");
  fishNameRow.textContent = inventory.fishName;
  inventoryRow.append(fishNameRow);

  var fishPriceRow = document.createElement("td");
  fishPriceRow.textContent = inventory.fishPrice;
  inventoryRow.append(fishPriceRow);
  // need to create sell button for each line of inventory
  var sellBtns = document.createElement("button");
  sellBtns.setAttribute("class", "sell-btns");
  sellBtns.textContent = "Sell Fish";
  inventoryRow.append(sellBtns);
  // append data to table row
  inventoryBody.append(inventoryRow);

  // add to inventory for selling to cj
  var cjInvTableBody = document.querySelector("#table-body");
  // create table row element
  var cjInventoryRow = document.createElement("tr");
  // create table data elements for each data point for that inventory item and append to table row
  var fishIconRow = document.createElement("td");
  var fishIconImg = document.createElement('img');
  fishIconImg.src = inventory.fishIcon;
  fishIconRow.append(fishIconImg);
  cjInventoryRow.append(fishIconRow);

  var fishNameRow = document.createElement("td");
  fishNameRow.textContent = inventory.fishName;
  cjInventoryRow.append(fishNameRow);

  var highPriceRow = document.createElement("td");
  highPriceRow.textContent = inventory.cjPrice;
  cjInventoryRow.append(highPriceRow);

  var sellToCjBtns = document.createElement("button");
  sellToCjBtns.setAttribute("class", "sell-btns");
  sellToCjBtns.textContent = "Sell Fish";
  cjInventoryRow.append(sellToCjBtns);
  // append data to table row
  cjInvTableBody.append(cjInventoryRow);

  // event listener for all sell buttons
  sellBtns.addEventListener("click", function () {
    // clear table row data
    inventoryRow.remove();
    cjInventoryRow.remove();
    // get current wallet price
    // update wallet total
    wallet.textContent = parseInt(wallet.textContent) + parseInt(fishPriceRow.textContent);
    storeWallet()
  });

  // sell fish to cj
  sellToCjBtns.addEventListener("click", function() {
    // remove fish from both inventories
    inventoryRow.remove();
    cjInventoryRow.remove();
    // adds cj price to wallet
    wallet.textContent = parseInt(wallet.textContent) + parseInt(highPriceRow.textContent);
    storeWallet()
  })

}

function storeWallet() {
  var walletAmt = wallet.textContent;
  localStorage.setItem("wallet", walletAmt)
}
// display inventory
function displayInventory() {
  // display backpack modal
  backpackModal.classList.add("is-active");
}

// display success
function displaySuccessModal() {
  successModal.classList.add("is-active");
  for (var i = 0; i < closingBtns.length; i++) {
    closingBtns[i].addEventListener("click", function () {
      successModal.classList.remove("is-active");
    });
  }
}
// display failure
function displayFailureModal() {
  failureModal.classList.add("is-active");
  for (var i = 0; i < closingBtns.length; i++) {
    closingBtns[i].addEventListener("click", function () {
      failureModal.classList.remove("is-active");
    });
  }
}

// display store
function displayStore() {
  storeModal.classList.add("is-active");
  angryCat.classList.add("hidden");
  storeCat.classList.remove("hidden");
  catFact.textContent = "";
}

function getRandomCatFact() {
  // condition to check is user has enough money
  if (parseInt(wallet.textContent) < 5000) {
    storeCat.classList.add("hidden");
    angryCat.classList.remove("hidden");
    catFact.textContent = "!!!!!!!HOW DARE YOU!!!!!!!";
    return;
  }
  // triggered when the user purchases from the store
  // retrieves cat fact from the server side api
  // return the data
  var catUrl = "https://meowfacts.herokuapp.com/";
  fetch(catUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (retrievedData) {
      console.log(retrievedData.data[0]);
      displayCatFact(retrievedData.data[0]);
    });
}

// get random number(max, min) inclusive
function getRandomNumber(max, min) {
  var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

function displayCatFact(randomCatFact) {
  // append or change text content of wallet
  wallet.textContent = parseInt(wallet.textContent) - factPrice;
  // set text content the cat fact to cat fact div
  catFact.textContent = randomCatFact;
  // update local storage
  storeWallet();
}

// display inventory to sell to cj
function displayCjInv() {
  cjModal.classList.add("is-active");

}

// resets fish position after adding to backpack
function resetFishPos(){
  // first remove the current image
  fishImageOnWater.remove();
  // re-create the element with appropriate styling
  fishImageOnWater = document.createElement("img");
  fishImageOnWater.classList.add("hidden")
  fishImageOnWater.setAttribute("id", "fish-on-water")
  
  // append to main box
  mainBox.appendChild(fishImageOnWater);
  
}

// chance fish guy appears
function getFishGuy(){
  // get a random number between 100 and 0
  var chance = getRandomNumber(100, 0);
  // 30 percent chance to appear
  if(chance < 30){
    // display cj
    sellToCj.classList.remove("hidden")
  }
}
// fish guy needs to disappear after (some) time

// event listeners
// cast rod button
castBtn.addEventListener("click", castRod);
// reel in button
reelInButton.addEventListener("click", reelIn);
// backpack button
backpackBtn.addEventListener("click", displayInventory);
// close backpack button
exitBackpackBtn.addEventListener("click", function () {
  backpackModal.classList.remove("is-active");
});
// open store button
storeBtn.addEventListener("click", displayStore);
// close store button
exitStoreBtn.addEventListener("click", function () {
  storeModal.classList.remove("is-active");
});
// buy cat fact button
buyFactBtn.addEventListener("click", getRandomCatFact);
// sell to CJ button
sellToCj.addEventListener("click", displayCjInv);
// close CJ inv button
closeCjModal.addEventListener("click", function () {
  cjModal.classList.remove("is-active");
  sellToCj.classList.add("hidden")
});

// drag and drop (drop activity)
interact(".dropzone").dropzone({
  accept: "#fish-on-water",
  // overlap: 0.75,

  ondragenter: function () {
    // replaces the backpack close to  open
    openedBackpack.classList.remove("hidden");
    closedBackpack.classList.add("hidden");

    console.log("enter");
  },

  ondragleave: function () {
    // replaces the backpack open to close
    openedBackpack.classList.add("hidden");
    closedBackpack.classList.remove("hidden");
    console.log("leave");
  },

  ondrop: function (event) {
    // resets fish position
    resetFishPos();

    // hides the fish elem
    event.relatedTarget.classList.add("hidden");

    // changes backpack image back to closed
    openedBackpack.classList.add("hidden");
    closedBackpack.classList.remove("hidden");

    // add to inventory
    addToInventory();

    // re display cast button
    castBtn.classList.remove("hidden");
    standingCat.classList.remove("hidden");
    fishingCat.classList.add("hidden")
  },
});

// drag and drop (drag activity)
interact("#fish-on-water").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

