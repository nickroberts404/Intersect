var fire = new Firebase("https://intersecthacktx.firebaseio.com/");
var signupButton = $('#signup-button');
var loginButton = $('#login-button');
var loginFBButton = $('#login-fb-button');
var loginGHButton = $('#login-gh-button');
var loginGButton = $('#login-g-button');
var loginEmail = $('#user-email');
var loginPassword = $('#user-pass');
signupButton.on("click", handleUserCreation);
loginButton.on("click", handlePasswordLogin);
loginFBButton.on("click", function(){handleOAuthLogin("facebook")});
loginGHButton.on("click", function(){handleOAuthLogin("github")});
loginGButton.on("click", function(){handleOAuthLogin("google")});

function handleOAuthLogin(provider){
	fire.authWithOAuthPopup(provider, handleLogin);
}

function handlePasswordLogin(){
	console.log(loginEmail.val());
	fire.authWithPassword({
		email: loginEmail.val(),
		password: loginPassword.val()
	}, handleLogin);
}

function handleLogin(error, userData){
	if(error){
		console.log("Error logging in user: ", error);
	} else{
		console.log("Succesfully logged in user account: ", userData);
	}
}

function handleUserCreation(){
	fire.createUser({
		email: loginEmail.val(),
		password: loginPassword.val()
	}, function(error, userData){
		if(error){
			console.log("Error creating user: ", error);
		} else{
			console.log("Succesfully created user account: ", userData);
		}
	});
}
