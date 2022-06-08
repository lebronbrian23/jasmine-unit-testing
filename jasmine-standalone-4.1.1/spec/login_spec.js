//The login specs
describe("Login specs - Test to pass", function(){
//each spec starts with a keyword it.
	//test to pass
	it("The username and the password match", function() {//THE SPEC
       expect(checklogin('brian' ,'mylogin')).toBe(true); 
    });
	
});

describe("Login specs - Test to fail", function(){
//each spec starts with a keyword it.
	
	//test to fails
	it("The username input does not match a known username or the password input does not match a known password", function() {//THE SPEC
       expect(checklogin('james' ,'keepit')).toEqual('Invalid Username or Password.'); 
    });
	
	//test to fails
	it("The username input does not match a known username", function() {//THE SPEC
       expect(checklogin('brin' ,'mylogin')).toEqual('Invalid Username or Password.'); 
    });
	
	//test to fails
	it("The password input does not match a known password", function() {//THE SPEC
       expect(checklogin('brian' ,'mylogi')).toEqual('Invalid Username or Password.'); 
    });
	
   //test to fails
	it("No username entered.", function() {//THE SPEC
       expect(checklogin('' ,'mylogin')).toEqual('No username entered.'); 
    });
	
	//test to fails
	it("No password entered.", function() {//THE SPEC
       expect(checklogin('brian' ,'')).toEqual('No password entered.'); 
    });
	
});

describe("Md5 encryption - Test to pass", function(){
	var regex = /^[a-f0-9]{32}$/gi;
	//test to pass
	it("Returns a 32 character HEXIDECIMAL string.", function() {//THE SPEC
    	expect(md5Encrypt('mylogin')).toMatch(regex);
    });
});



