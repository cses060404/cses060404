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
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);
        var results = data.result;
        
        //get the list elements
        var shipListElement = document.getElementById('shiplist');
        
        // make sure i
        shipListElement.innerHTML = "";
    });
}