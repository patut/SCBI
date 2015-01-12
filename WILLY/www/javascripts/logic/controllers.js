var scheu;
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
//   $("#subs").bind('change', function() {
// if(this.checked) {
// alert('checked');
// }
// else{
// alert('unchecked');

// }

// });

    var refauth = new Firebase('https://scbiauthorized.firebaseio.com/');
    var refsub = new Firebase('https://subscribes.firebaseio.com/');
  var app=angular.module('SCBI.controllers', ['firebase']);
  app.controller('AuthorizationController', function($scope, $location, $firebase){
    steroids.tabBar.hide();




  $scope.Authorize=function(){

    steroids.tabBar.show();
  var x=$scope.teachers;
  var a=0;
    for(var i=0;i<x.length;i++){
      if ($scope.Email===$scope.teachers[i].email)
      {
            refauth.child(0).set({name: $scope.teachers[i].name});
            refauth.child(1).set({name: $scope.teachers[i].name});
        a=0;
        // alert('Здравствуйте, '+ $scope.teachers[i].name);
        $location.path('teachers');
        break;

      }
      else{ 
        a=1;
      }
    }
    if (a===1){
    alert('Вы точно не учитель...');
    $scope.Email='';} 
}
//ADD MESSAGE METHOD

  });






app.controller('TeachersListController', ['$scope', '$routeParams', '$location', '$filter', '$firebase', function($scope, $routeParams, $location, $filter, $firebase)
{
 
 $(document).ready(function(){
  $('html, body').animate({scrollTop: '0px'}, 0);
 })
$scope.t=$scope.teachers[$routeParams.id];
var teach=$scope.t;

function ConvertS(teach){  

  var days=[];
for (var i=0;i<teach.schedule.length;i++){
  var date = $filter('date')(teach.schedule[i].day, "EEEE");
  days.push([
    {
      day: date
    },
    {
      schedules: 
      [
      {
      begin: teach.schedule[i].begin, 
      end: teach.schedule[i].end,
      room: teach.schedule[i].room
      }
      ]
    }
      ]);
  // alert("День "+days[i][0].day);
  // alert("Комната "+days[i][1].schedules[0].room);

  }
  var a = days;
  var b = days;

  for (var i=0;i<a.length;i++)
  {
    for (var j=0;j<a.length;j++)
    {
      if ((i!==j)&&(a[i][0].day===days[j][0].day))
       {

      // alert(b[i][0].day);
      // alert(b[i][1].schedules[0].room);

      var oldday = b[i][0].day;
      var timet = b[i][1].schedules[0];

        //       alert("Длина урезанного "+b.length);
        // alert("Длина вспомогательного "+a.length);
        b.splice(i, 1);
        // alert("Длина урезанного "+b.length);
        // alert("Длина вспомогательного "+a.length);
  
        // alert(oldday);
        for (var z=0;z<b.length;z++)
        {
          if (b[z][0].day===oldday)
          {
            b[z][1].schedules.push(timet); 


          }
        }
      }
    }
  }
return b;
}
$scope.sched=ConvertS(teach);

  // $scope.mail = $firebase(refauth).$asArray();

  // alert($scope.mail.entered);
  steroids.view.navigationBar.show("СКБИ");
  var leftButton = new steroids.buttons.NavigationBarButton();
  leftButton.title = "Назад";

   leftButton.onTap = function() {
    $('#back').click();

          steroids.view.navigationBar.update({
  buttons: {
    left: []
  }
});

    };



    steroids.view.navigationBar.update({
        buttons: {
          left: [leftButton]
        }
    });
 

$scope.addSubscribe=function(){


    refsub.child(0).set({
      idSubscriber: 0,
      idTeacher: teach.idTeacher
    });
};

 }])
  .directive('timetableTeacher', function(){

    return{
      restrict: 'E',
      templateUrl:'timetable-teacher.html'
    }
  });




  app.controller("TeachersController", ['$scope', '$firebase', function($scope, $firebase)
    { 

//
//Считывание из базы
//
  var ref = new Firebase('https://blinding-heat-1969.firebaseio.com/');
  $scope.teachers = $firebase(ref).$asArray();
  var refchar= new Firebase('https://scbi.firebaseio.com/');
  $scope.messages = $firebase(refchar).$asArray();

    }]);






app.controller("TimetableController", ['$scope', '$firebase', '$filter', function($scope, $firebase, $filter)
    { 
//
//Считывание из базы
//
// // alert($scope.teachers);
//   var at = $scope.teachers;
//   alert(at);


//Вывод распиания
//
// var handlerId = steroids.tabBar.on('didchange', function(event) {
//   // alert("Tab index: " + event.target.tab.index);
//   if (event.target.tab.index===1){
  


// $scope.ConvertN = function(teach){ 
//   var days=[];
//   // alert(teach);
// for (var i=0;i<teach.schedule.length;i++){
//   var date = $filter('date')(teach.schedule[i].day, "EEEE");
//   days.push([
//     {
//       day: date
//     },
//     {
//       schedules: 
//       [
//       {
//       begin: teach.schedule[i].begin, 
//       end: teach.schedule[i].end,
//       room: teach.schedule[i].room
//       }
//       ]
//     }
//       ]);
//   // alert("День "+days[i][0].day);
//   // alert("Комната "+days[i][1].schedules[0].room);

//   }
//   var a = days;
//   var b = days;
//   for (var i=0;i<a.length;i++)
//   {
//     for (var j=0;j<a.length;j++)
//     {
//       if ((i!==j)&&(a[i][0].day===days[j][0].day))
//        {

//       // alert(b[i][0].day);
//       // alert(b[i][1].schedules[0].room);

//       var oldday = b[i][0].day;
//       var timet = b[i][1].schedules[0];

//         //       alert("Длина урезанного "+b.length);
//         // alert("Длина вспомогательного "+a.length);
//         b.splice(i, 1);
//         // alert("Длина урезанного "+b.length);
//         // alert("Длина вспомогательного "+a.length);
  
//         // alert(oldday);
//         for (var z=0;z<b.length;z++)
//         {
//           if (b[z][0].day===oldday)
//           {
//             b[z][1].schedules.push(timet); 

//           }
//         }
//       }
//     }
//   }
//   // for (var i=0;i<b.length;i++)
//   // {
//   //   alert(b[i][0].day);
//   // }
// return b;

//   // alert($scope.sch[0][1].schedules[0].room);
//   // alert($scope.sch);
  
// };
// $scope.sch=ConvertN(at[0]);


// }

 // });



    }])
    .directive('timetableDay', function(){
    return{
      restrict: 'E',
      templateUrl:'timetable-day.html'
    }

});









 app.controller('ChatController', ['$scope', '$firebase', function($scope, $firebase){
      var ref = new Firebase('https://scbiauthorized.firebaseio.com/');
            $scope.addMessage = function(e) {
            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              
              

              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              $scope.messages.$add({from: $scope.name, body: $scope.msg});
              //RESET MESSAGE
              $scope.msg = "";
            }
          }

 }]);





app.controller('AddController', ['$scope', '$firebase', function($scope, $firebase){

  var ref = new Firebase('https://blinding-heat-1969.firebaseio.com/');
  $scope.teachers = $firebase(ref).$asArray();


// $scope.getNumber = function(num) {

//     return new Array(num);   
// }

 $scope.addLesson = function(id, begin, day, end, room, rep){

  var a=$.map($scope.teachers[id], function(value, index) {return [value];}).length;

  if(a===8)
  {
    var a = $scope.teachers[id].schedule.length;
  }
  else{
    var a=0;
  }
 
    ref.child(id).child('schedule').child(a).set(
  {begin: begin.getTime().toString(), 
  day: day.getTime().toString(), 
  end: end.getTime().toString(), 
  rep: rep, 
  room: room});
 alert('Урок добавлен');
};
  $scope.addTeacher = function()
  {
    

    var p="https://blinding-heat-1969.firebaseapp.com/"+$scope.idTeacher;

    ref.child($scope.teachers.length).set({
      email: $scope.email,
      idTeacher: $scope.teachers.length,
      name: $scope.name,
      photo: p,
      subject: $scope.subject
    });
    $scope.idTeacher="";
    $scope.name="";
    $scope.photo="";
    $scope.subject="";
    $scope.email="";    


  };
  
}])

