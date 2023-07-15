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
    
 }
        // kayla 
        // open inventory - display

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
