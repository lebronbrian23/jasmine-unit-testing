/**
 * checklogin function uses md5Encrypt function.
 * Returns a boolean true if username and password match or an error message if the username and password dont match or username and password are empty.
 * @param {string} username ,{string} password
 */
function checklogin(username , user_password) {
    "use strict";
	var known_username = 'brian';
	var known_password = '9b534ea55d0b82c3a7e80003a84b6865'; //known hashed password
	//hashing of user provided password
	var password = md5Encrypt(user_password); 
	
	//different responses 
	var response = "";
	var successs = true;
	var invalid_message = 'Invalid Username or Password.';
	var missing_username = 'No username entered.';
	var missing_password = 'No password entered.';

	if(known_password === password && known_username === username){
	
		response = successs;
	}
	
	if(username !== known_username || password !== known_password){
		response = invalid_message;
	}
	if(username === known_username && password !== known_password){
		response = invalid_message;
	}
	
	if(username !== known_username && password === known_password ){
		response = invalid_message;
	}
	if(username === '' || username === null){
		response = missing_username;  
	}
	
	if(user_password === '' || user_password === null){
		response = missing_password; 
	}
	return response;
	
}//END checklogin