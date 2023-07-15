// element selectors
    // character container
    // container for commerce
    // all the buttons (6 buttons)
var backpackBtn = document.querySelector('#closed');
var backpackModal = document.querySelector('#backpack-modal');
var exitBackpackBtn = document.querySelector('#exit-backpack');
var inventoryRows = document.querySelector('#inventory-rows');

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
        
// open inventory
 function getInventory(){
    // display backpack modal
    backpackModal.classList.add("is-active");
    // display contents of inventory
    for(var i = 0; i < inventory.fishIcon.length; i++){
        fishIcon.push('fetch icon variable here');
        // console.log(fishIcon); 
        inventoryRows.createElement('td');
        inventoryRows.append(fishIcon[i]);
    }
    for(var i = 0; i < inventory.fishName.length; i++){
        fishName.push('fetch name variable here');
        // console.log(fishName);
        inventoryRows.createElement('td');
        inventoryRows.append(fishName[i]);
    }
    for(var i = 0; i < inventory.fishPrice.length; i++){
        fishPrice.push('fetch price variable here');
        // console.log(fishPrice);
        inventoryRows.createElement('td');
        inventoryRows.append(fishPrice[i]);
    }
    // need to create sell button on each line of inventory
    // need event listener for all sell buttons
        // sell buttons will clear only that line of inventory and add to wallet text content dependant on how much sell price is
 };

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
backpackBtn.addEventListener("click", getInventory);
    // close backpack button
exitBackpackBtn.addEventListener('click', function(){
    backpackModal.classList.remove("is-active");
});
    // store button
    // sell fish button
    // cat fact button
