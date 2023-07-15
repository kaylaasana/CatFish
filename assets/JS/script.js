// element selectors
    // character container
    // container for commerce
    // all the buttons (6 buttons)

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

    // get inventory function

    // store fish function

    // display success
    var reelInButton = document.querySelector('#reel-btn')

    var clicked = false
    // reelInButton.addEventListener('click', function() {
    //     clicked = true
    // })

    if(clicked === true) {
        displaySuccessModal()
    } else {
        displayFailureModal()
    }

    function displaySuccessModal() {
        var successModal = document.querySelector('#success-modal')
        successModal.classList.add("is-active");
        for(var i = 0; i < closingBtns.length; i++){
            closingBtns[i].addEventListener("click", function(){
                theModal.classList.remove("is-active");
            })
        }   
    }

    // display failure
    function displayFailureModal() {
        var failureModal = document.querySelector('#failure-model')
        failureModal.classList.add("is-active");
        for(var i = 0; i < closingBtns.length; i++){
            closingBtns[i].addEventListener("click", function(){
                theModal.classList.remove("is-active");
            })
        }   
    }

    // change char img
    var castBtn = document.querySelector("cast-btn")
    var standingCat = document.querySelector("standing-cat")
    var fishingCat = document.querySelector("fishing-cat")

    castBtn.addEventListener('click', function() {
        standingCat.classList.add("hidden")
        fishingCat.classList.remove("hidden")
    })

    // sell fish function

    // display store
   
    // get random cat fact

    // get random number(max, min)      

// event listeners
    // cast rod button
    // reel in button
    // backpack button
    // store button
    // sell fish button
    // cat fact button
