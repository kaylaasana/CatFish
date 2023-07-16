// element selectors
// character container
// container for commerce
// all the buttons (6 buttons)
var backpackBtn = document.querySelector("#closed");
var backpackModal = document.querySelector("#backpack-modal");
var exitBackpackBtn = document.querySelector("#exit-backpack");
var inventoryBody = document.querySelector("#table-body");
var wallet = document.querySelector("#money");
var storeBtn = document.querySelector("#store");
var storeModal = document.querySelector("#store-modal");
var exitStoreBtn = document.querySelector("#exit-store");

// global variables
// request URL
// money
// inventory
var inventory = {
  fishIcon: "",
  fishName: "",
  fishPrice: "",
};

// functions
<<<<<<< HEAD
    // change char img
    var castBtn = document.querySelector("#cast-btn")
    var standingCat = document.querySelector("#standing-cat")
    var fishingCat = document.querySelector("#fishing-cat")

    castBtn.addEventListener('click', function() {
        standingCat.classList.add("hidden")
        fishingCat.classList.remove("hidden")
    })

    // cast rod function
    function castRod(){
        
        // gets random fish data from animal crossing api
        var axUrl = "http://acnhapi.com/v1/fish/"
        // fetch request to get data
        fetch(axUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            // get random number to get random fish data from animal crossing api
            // make an array of keys
            var dataKeys = Object.keys(data);

            // get a random number between key length and 0 (inclusive)
            var randomNum = getRandomNumber(dataKeys.length-1, 0);

            // a random key from the data
            var fishKey = dataKeys[randomNum];

            // random fish from the data set
            var randomFish = data[fishKey];

            // add the data set to inventory object
            inventory.fishName = randomFish.name["name-USen"];
            inventory.fishPrice = randomFish.price;
            inventory.fishIcon = randomFish.icon_uri;
                
            var fishImg = randomFish.image_uri;
            console.log(fishImg);

            // reel fish
            
        })
        
    }
        // fish name
        // fish price
        // image
        // icon

    // delays fish bite
    function setCastingTime(){
        // get a random number for how long it should delay between 
        var delay = getRandomNumber(8000, 5000);
        // after certain amount of time, make the reel in available
        setTimeout(function(){
            // sets the exclamation mark (on bite)
        }, delay)
    }
        

    // reel fish function

    // set interval timer for reeling in fish
        
    // update inventory
    function addToInventory(){
        // create table row element
        var inventoryRow = document.createElement('tr'); 
        // create table data elements for each data point for that inventory item and append to table row
        var fishIconRow = document.createElement('td');
        fishIconRow.textContent = inventory.fishIcon
        inventoryRow.append(fishIconRow);
        
        var fishNameRow = document.createElement('td');
        fishNameRow.textContent = inventory.fishName
        inventoryRow.append(fishNameRow);
        
        var fishPriceRow = document.createElement('td');
        fishPriceRow.textContent = inventory.fishPrice
        inventoryRow.append(fishPriceRow);
        // need to create sell button for each line of inventory
        var sellBtns = document.createElement('button')
        sellBtns.setAttribute('class', 'sell-btns');
        sellBtns,textContent = "Sell Fish";
        inventoryRow.append(sellBtns);
        // append data to table row
        inventoryBody.append(inventoryRow);
        // event listener for all sell buttons
        sellBtns.addEventListener('click', function(){
            // clear table row data
            inventoryRow.remove();
            // get current wallet price
            // update wallet total
            wallet.textContent = parseInt(wallet.textContent) + inventory.fishPrice;
        })
    };
    
    // display inventory
    function displayInventory(){
        // display backpack modal
        backpackModal.classList.add("is-active");
    }
    // store fish function
=======
// cast rod function
function castRod() {
  // gets random fish data from animal crossing api
  var axUrl = "http://acnhapi.com/v1/fish/";
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

      var fishImg = randomFish.image_uri;
      console.log(fishImg);

      // reel fish
    });
}
>>>>>>> 0d0f6aee193b2425f424e3b0c4d341610ebd65b5

// set interval timer for fish bite

// reel fish function

// set interval timer for reeling in fish

// update inventory
function addToInventory() {
  // create table row element
  var inventoryRow = document.createElement("tr");
  // create table data elements for each data point for that inventory item and append to table row
  var fishIconRow = document.createElement("td");
  fishIconRow.textContent = inventory.fishIcon;
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
  sellBtns, (textContent = "Sell Fish");
  inventoryRow.append(sellBtns);
  // append data to table row
  inventoryBody.append(inventoryRow);
  // event listener for all sell buttons
  sellBtns.addEventListener("click", function () {
    // clear table row data
    inventoryRow.remove();
    // get current wallet price
    // update wallet total
    wallet.textContent = parseInt(wallet.textContent) + inventory.fishPrice;
  });
}
// display inventory
function displayInventory() {
  // display backpack modal
  backpackModal.classList.add("is-active");
}
// display store
function displayStore() {
  storeModal.classList.add("is-active");
}

function getRandomCatFact() {
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
      return retrievedData.data[0];
    });
}

// get random number(max, min) inclusive
function getRandomNumber(max, min) {
  var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

<<<<<<< HEAD
    // display failure
    // function displayFailureModal() {        
    //     failureModal.classList.add("is-active");
    //     for(var i = 0; i < closingBtns.length; i++){
    //         closingBtns[i].addEventListener("click", function(){
    //             theModal.classList.remove("is-active");
    //         })
    //     }   
    // }

    // sell fish function

    // display store
   
    // get random cat fact

        // june

    // get random number(max, min)    
        // june  

    function getRandomCatFact(){
        // triggered when the user purchases from the store
        // retrieves cat fact from the server side api
        // return the data
        var catUrl = "https://meowfacts.herokuapp.com/"
        fetch(catUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (retrievedData){
            console.log(retrievedData.data[0]);
            return retrievedData.data[0];
            
        })
    }

    // get random number(max, min) inclusive
    function getRandomNumber(max, min){
        var randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
        return randomNum;
    }

    // event listeners
        // cast rod button
        // reel in button
        // backpack button
    backpackBtn.addEventListener("click", displayInventory);
        // close backpack button
    exitBackpackBtn.addEventListener('click', function(){
        backpackModal.classList.remove("is-active");
    });
    // store button
    // sell fish button
    // cat fact button
=======
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
>>>>>>> 0d0f6aee193b2425f424e3b0c4d341610ebd65b5
