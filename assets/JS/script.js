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
            console.log(randomFish);
        })
        
    }
    castRod();
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

    // get random number(max, min) inclusive
    function getRandomNumber(max, min){
        var randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
        return randomNum;
    }
          

// event listeners
    // cast rod button
    // reel in button
    // backpack button
    // store button
    // sell fish button
    // cat fact button
