/**
 * 
 * Generated by
 * 
   _____ _          __  __      _     _           
  / ____| |        / _|/ _|    | |   | |          
 | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __ 
  \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
  ____) |   < (_| | | | || (_) | | (_| |  __/ |   
 |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|   
 *                 
 *			www.skaffolder.com
 */



var app = angular.module('Manage_Film_Example_App', [
'ngRoute',
'ngResource'
]).config(function ($routeProvider) {
	
	$routeProvider
	
//DO NOT EDIT THIS ROUTES, USE NEXT COMMENT SECTION

// START - ROUTE
	.when('/actors/:id', {
	  templateUrl: 'html/ActorEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/actors', {
	  templateUrl: 'html/ActorList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/films/:id', {
	  templateUrl: 'html/FilmEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/films', {
	  templateUrl: 'html/FilmList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/filmmakers/:id', {
	  templateUrl: 'html/FilmMakerEdit.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/filmmakers', {
	  templateUrl: 'html/FilmMakerList.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})
	.when('/home', {
	  templateUrl: 'html/Home.html',
	  resolve: {
		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
	  },
	})

// END - ROUTE

// INSERT HERE YOUR CUSTOM ROUTES
		

// DEFAULT ROUTES
    .when('/profile', {
      templateUrl: 'js/security/profile/Profile.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
      },
    })
    .when('/manage-users', {
      templateUrl: 'js/security/manageUser/UsersList.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
    .when('/manage-users/:id', {
      templateUrl: 'js/security/manageUser/UsersEdit.html',
      resolve: {
          user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.hasRole("ADMIN"); }]
      },
    })
	.when('/login', {
	    templateUrl: 'html/Login.html',
	    controller: 'LoginController'
	})
	.when('/logout', {
	      templateUrl: 'html/Login.html',
	      controller: 'LogoutController',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.when('/', {
	      templateUrl: 'html/Home.html',
    	  resolve: {
    		  user: ["AuthenticationService", function(AuthenticationService) { return AuthenticationService.isAuthenticated(); }]
    	  },
	})
	.otherwise({
		templateUrl: 'html/404.html',
	});
	
});