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
    //call getJSON function to get the list of ships from the api
    getJSON("../API/weather.json").then(function(data) {
     //  console.log(data);
       
        var location = data["Franklin"]['City'];
        var state = data["Franklin"]['State'];
        var message = data["Franklin"]['High']
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
                document.getElementById('location').innerHTML = location[0].city;
                document.getElementById('temp').innerHTML = location[0].high;
                document.getElementById('message').innerHTML = ""location[0].high;
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