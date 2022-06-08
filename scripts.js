window.onload = function(){
	"use strict";
    // variable declaration
    var form = document.forms.login;
    var output = document.querySelector(".output");
    
    //form listerner
    form.onsubmit = processForm;

	// function to process form data and returns successful or error message
    function processForm(){
        var username = form.username;
        var password = form.password;
		var successful = "Welcome back!";
		var error = "";

         //input validation
		let validate = checklogin(username.value , password.value);
		if(validate === true){
        
			output.innerHTML = successful;
			output.style.display = "block";
			return false;
		}else{
			output.innerHTML =validate;
			output.style.display = "block";
			return false;
		}
    }

}