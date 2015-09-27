var app = angular.module("hackApp", []);

app.controller("loginController", function($scope){
	var fire = new Firebase("https://intersecthacktx.firebaseio.com/");
	console.log($scope);
	$scope.handleOAuthLogin = function(provider){
		fire.authWithOAuthPopup(provider, handleLogin);
	}
	$scope.handlePasswordLogin = function(){
		
		fire.authWithPassword({
			email: $scope.loginEmail,
			password: $scope.loginPass
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
});
// $(document).ready(function(){
//   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
//   $('.modal-trigger').leanModal();
//  });
 
//   $(document).ready(function() {
//   $('select').material_select();
// });