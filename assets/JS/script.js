// element selectors
    // character container
    // container for commerce
    // all the buttons (6 buttons)

// global variables
    // request URL
    // money
    // inventory

// functions
    // change char img
    // var castBtn = document.querySelector("#cast-btn")
    // var standingCat = document.querySelector("#standing-cat")
    // var fishingCat = document.querySelector("#fishing-cat")

    // castBtn.addEventListener('click', function() {
    //     standingCat.classList.add("hidden")
    //     fishingCat.classList.remove("hidden")
    // })

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
    var successModal = document.querySelector('#success-modal')
    var failureModal = document.querySelector('#failure-model')
    var closingBtns = document.querySelectorAll(".closeModal");

    reelInButton.addEventListener("click", function() {
        displaySuccessModal()
    })

    function displaySuccessModal() {
        successModal.classList.add("is-active");
        for(var i = 0; i < closingBtns.length; i++){
            closingBtns[i].addEventListener("click", function(){
                successModal.classList.remove("is-active");
            })
        }   
    }

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

    // get random number(max, min)      

// event listeners
    // cast rod button
    // reel in button
    // backpack button
    // store button
    // sell fish button
    // cat fact button
