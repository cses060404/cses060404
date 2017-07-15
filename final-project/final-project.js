/* This part of the function is to get the data from the url*/ 
function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

/* The x here is a number, when the user click on different bottom, it would send a number to the function.*/
function ajaxFromLocalJson(x){
	getJSON("../final-project/schedule.json").then(function (data){
        /* We use console.log to check if we have the right element*/
		console.log(data);
        
		/* Here we would put the right info in the right id property*/
		document.getElementById("round").innerHTML = data["game" + x].round;
		document.getElementById("date").innerHTML = data["game" + x].date;
        document.getElementById("location").innerHTML = data["game" + x].location;
        document.getElementById("time").innerHTML = data["game" + x].time;
        document.getElementById("description").innerHTML = data["game" + x].description;   
        
});
}
ajaxFromLocalJson(1);