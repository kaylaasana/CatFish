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

    // display failure

    // change char img

    // sell fish function

    // display store
   
    // get random cat fact
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
    
    // get random number(max, min)      

// event listeners
    // cast rod button
    // reel in button
    // backpack button
    // store button
    // sell fish button
    // cat fact button
