 function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }


function ajaxFromLocalJson(x){
	getJSON("../final-project/schedule.json").then(function (data){
		console.log(data);
        
        
		
		document.getElementById("round").innerHTML = data["game" + x].round;
		document.getElementById("date").innerHTML = data["game" + x].date;
        document.getElementById("location").innerHTML = data["game" + x].location;
        document.getElementById("time").innerHTML = data["game" + x].time;
        document.getElementById("description").innerHTML = data["game" + x].description;   
        
        
        
        
        
        
        
        
        
        
        
    
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
ajaxFromLocalJson(1);