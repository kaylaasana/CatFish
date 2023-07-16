// element selectors
// start button
var startBtn = document.querySelector("#start-btn");
    // how to play button
var how2PlayBtn = document.querySelector("#how-to-play-btn");
var theModal = document.querySelector("#modal-how-to-play");
var closingBtns = document.querySelectorAll(".closeModal");

// function to start game
function startGame(){
    // direct you to game page
    window.location.href = "./assets/game-page.html";
}
        
// event listener for start button
startBtn.addEventListener("click", startGame);


// event listener for how to play
how2PlayBtn.addEventListener("click", function(){
    theModal.classList.add("is-active");
})

for(var i = 0; i < closingBtns.length; i++){
    closingBtns[i].addEventListener("click", function(){
        theModal.classList.remove("is-active");
    })
}