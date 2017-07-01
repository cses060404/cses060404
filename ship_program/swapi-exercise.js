function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function fetchShips() {
    var url = "//swapi.co/api/starships/";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function(data) {
        //stuff that should happen after the request is done.
        //console.log(data);
        
        var results = data.results;
        //get the list elements
        var shipListElement = document.getElementById('shiplist');
        
        // make sure i
        shipListElement.innerHTML = "";
        
        //loop through the ships.
        results.forEach(function(ship) {
            
        //create elements for list.....li and a
        var listItem = document.createElement('li');
        var link = document.createElement('a');
            
        link.setAttribute('href',ship.url);
        
        link.innerHTML = ship.name;
            link.addEventListener('click',function(event){
                //when clicked the default link behavior should be stopped, and the ship details function should be called... passing the value of the href attribute in
                event.preventDefault();
                getShipDetails(ship.url);
                
                // display the information of the webpage.
                document.getElementById('name').innerHTML = ship.name;
                document.getElementById('model').innerHTML = ship.model;
                document.getElementById('class').innerHTML = ship.starship_class;
                document.getElementById('movies').innerHTML = ship.manufacturer;
            });
        // add the link to the list item.
        listItem.appendChild(link);
     shipListElement.appendChild(listItem);
        });
    });
}
 
function getShipDetails(url) {
   getJSON(url).then(function (data) {
        console.log(data);
   });
}
fetchShips();


//I worked this program with Travis.