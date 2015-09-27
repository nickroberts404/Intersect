var app = angular.module("hackApp", ["ui.router"]);
app.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	    .state('index', {
	        url: "/",
	        views: {
	            "main": {
	                templateUrl: "../index.html"
	            }
	        }
	    })
	    .state('updateInfo', {
	        url: "/updateInfo",
	        views: {
	            "main": {
	                templateUrl: "../views/update.html",
	                controller: "updateCtrl"
	            }
	        }
	    })
	    .state('explore', {
	        url: "/explore",
	        views: {
	            "main": {
	                templateUrl: "../views/explore.html",
	                controller: "exploreCtrl"
	            }
	        }
	    })
	});