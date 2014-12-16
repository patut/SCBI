/*(function(){
angular.module('SCBI.services', []).
  factory('teachersAPIservice', function($http) {

    var dataAPI = {};

    dataAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'all_teachers.json'
      });
    }

    return dataAPI;
  });


});*/