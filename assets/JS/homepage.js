// element selectors
// start button
var startBtn = document.querySelector("#start-btn");
    // how to play button
var how2PlayBtn = document.querySelector("#how-to-play-btn");
var theModal = document.querySelector("#modal-how-to-play");
var closingBtns = document.querySelectorAll(".closeModal");

// function to start game
    // direct you to game page
        // window.location.href=file path to index.html


// function to display modal
    // research bulma docs for direction
    // event listener to close modal


// event listener for start button
// event listener for how to play

how2PlayBtn.addEventListener("click", function(){
    theModal.classList.add("is-active");
})

for(var i = 0; i < closingBtns.length; i++){
    closingBtns[i].addEventListener("click", function(){
        theModal.classList.remove("is-active");
    })
}