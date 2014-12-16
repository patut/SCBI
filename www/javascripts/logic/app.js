
angular.module('SCBI', ['SCBI.controllers','ngRoute']).config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/teachers',{ templateUrl: 'teachers.html'});
	$routeProvider.when('/teachers/:id', {templateUrl: 't.html', controller: 'TeachersListController'});
	$routeProvider.when('/', {templateUrl: 'authorization.html', controller: 'AuthorizationController'});
	$routeProvider.otherwise({redirectTo:'/'});
});

 

