(function(){
  /*
  function ViewTeachers(){
  var MoveNext = new steroids.Animation({
  transition: "fade",
  duration: 1.2,
  curve: "linear"
});
  var myView = new steroids.views.WebView("teachers.html");
steroids.layers.push({view: myView, animation: MoveNext}
  );
steroids.tabBar.selectTab(1);
};*/
  var app=angular.module('SCBI.controllers', ['firebase']);
  app.controller('AuthorizationController', function($scope, $location){

  $scope.Authorize=function(){
    $location.path('teachers');
  };
  });
app.controller('TeachersListController', ['$scope', '$routeParams', function($scope, $routeParams)
{
$scope.t=$scope.teachers[$routeParams.id];
 }])
  .directive('timetableTeacher', function(){

    return{
      restrict: 'E',
      templateUrl:'timetable-teacher.html'
    }
  });




  app.controller("TeachersController", ['$scope', '$firebase', function($scope, $firebase)
    { 
 
       var ref = new Firebase('https://blinding-heat-1969.firebaseio.com/');
  $scope.teachers = $firebase(ref).$asArray();
 
/*
            $scope. ViewTeacher = function(){
           var MoveNext = new steroids.Animation({
            transition: "slideFromRight",
            duration: 0.6,
            curve: "linear"
            });
           var myView = new steroids.views.WebView("teacher.html");
            steroids.layers.push({view: myView, animation: MoveNext});
};*/

    
     
       


    }])
  .directive('timetableDay', function(){

    return{
      restrict: 'E',
      templateUrl:'timetable-day.html'
    }
  });

       /*Один день разница-86400000*/
/*полтора часа 5400000*/
/*час двадцать 4800000*/
   /*alert(new Date(2014, 9, 13, 16, 10));*/

})();