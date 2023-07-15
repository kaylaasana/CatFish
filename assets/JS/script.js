// element selectors
    // character container
    // container for commerce
    // all the buttons (6 buttons)
var backpackBtn = document.querySelector('#closed');
var backpackModal = document.querySelector('#backpack-modal');
var exitBackpackBtn = document.querySelector('#exit-backpack');
var inventoryBody = document.querySelector('#table-body')

// global variables
    // request URL
    // money
    // inventory
var inventory = {
    fishIcon: [],
    fishName: [],
    fishPrice: [],
};

// functions
    // cast rod function
        // fetch request
        // fish name
        // fish price
        // image
        // icon

    // set interval timer for fish bite
        

    // reel fish function

    // set interval timer for reeling in fish
        
// update inventory
 function addToInventory(){
    // create table row element
    var inventoryRow = document.createElement('tr'); 
    // create table data elements for each data point for that inventory item and append to table row
    var fishIconRow = document.createElement('td');
    fishIconRow.textContent = inventory.fishIcon[inventory.fishIcon.length -1]
    inventoryRow.append(fishIconRow);
    
    var fishNameRow = document.createElement('td');
    fishNameRow.textContent = inventory.fishName[inventory.fishName.length -1]
    inventoryRow.append(fishNameRow);
    
    var fishPriceRow = document.createElement('td');
    fishPriceRow.textContent = inventory.fishPrice[inventory.fishPrice.length -1]
    inventoryRow.append(fishPriceRow);
    // need to create sell button for each line of inventory
    var sellBtns = document.createElement('button')
    sellBtns.setAttribute('class', 'sell-btns');
    sellBtns,textContent = "Sell Fish";
    inventoryRow.append(sellBtns);
    // append data to table row
    inventoryBody.append(inventoryRow);
    // event listener for all sell buttons
        // sell buttons will clear only that line of inventory and add to wallet text content dependant on how much sell price is
 };

//  function displayInventory()
    // display backpack modal
    // backpackModal.classList.add("is-active");
    // store fish function

    // display success
        // minhee

    // display failure
        // minhee

    // change char img

    // sell fish function

    // display store
   
    // get random cat fact
        // june

    // get random number(max, min)    
        // june  

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
