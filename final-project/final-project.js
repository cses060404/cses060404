/*

    // Get the data from the wunderground API
    function getData() {
    
        getJSON("/final-project/schedule.json").then(function (data) {
            //add the code necessary here to update the page with all of the correct data points.
            var data = data;
            console.log(data);
            var game1 = data[game1];
            document.getElementById("date").innerHTML = game1.time;
        })}
}());
//still dont know why

/*

*/

 function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }


function ajaxFromLocalJson(){
	getJSON("../final-project/schedule.json").then(function (data){
		console.log(data);
        
        
		
		document.getElementById("location").innerHTML = data["game1"].time;
            document.getElementById("date").innerHTML = data[0].time;
		document.getElementById("description").innerHTML = data.["game1"].time;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
        /*	
			home_button.addEventListener('click',function(event){
				event.preventDefault();
				buildHome(data.Home);
			
			});
	  
			registration.addEventListener('click',function(event){
				event.preventDefault();
				buildRegistration(data.Registration);
	  
	  });
	  
			rules.addEventListener('click',function(event){
				event.preventDefault();
				buildRules(data.Rules);
	  
	  });
	
});
*/
});
}
ajaxFromLocalJson();