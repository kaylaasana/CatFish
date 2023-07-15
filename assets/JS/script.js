// element selectors
    // character container
    // container for commerce
    // all the buttons (6 buttons)
var backpackBtn = document.querySelector('#closed');
var backpackModal = document.querySelector('#backpack-modal');
var exitBackpackBtn = document.querySelector('#exit-backpack');

// global variables
    // request URL
    // money
    // inventory
var inventory = {
    fishIcon: [],
    fishName: [],
    fishPrice: [],
}

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
        

 function getInventory(){
    backpackModal.classList.add("is-active");
    for(var i = 0; i < inventory.fishIcon.length; i++){
        fishIcon.push('fetch icon variable here');
        console.log(fishIcon)        
    }
    for(var i = 0; i < inventory.fishName.length; i++){
        fishName.push('fetch name variable here')
        console.log(fishName)
    }
    for(var i = 0; i < inventory.fishPrice.length; i++){
        fishPrice.push('fetch price variable here')
        console.log(fishPrice)
    }
 }

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
exitBackpackBtn.addEventListener('click', function(){
    backpackModal.classList.remove("is-active");
})
    // store button
    // sell fish button
    // cat fact button
