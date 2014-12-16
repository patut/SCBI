  // Navigate to your view
var MoveLeft = new steroids.Animation({
  transition: "flipHorizontalFromRight",
  duration: 1.0,
  curve: "linear"
});
var MoveRight = new steroids.Animation({
  transition: "flipHorizontalFromLeft",
  duration: 1.0,
  curve: "linear"
});

function getnexttitle( event ){
	if (event.type=="swipeleft"){
	switch (location.pathname)
	{
		case ("/timetable_mon.html"):
		return "timetable_tue.html";
		break;

		case ("/timetable_tue.html"):
		return "timetable_wen.html";
		break;

		case ("/timetable_wen.html"):
		return "timetable_thur.html";
		break;
		
		case ("/timetable_thur.html"):
		return "timetable_fri.html";
		break;
		
		case ("/timetable_fri.html"):
		return "timetable_sat.html";
		break;
		
		case ("/timetable_sat.html"):
		return "timetable_sun.html";
		break;
		
		case ("/timetable_sun.html"):
		return "timetable_mon.html";
		break;
	}
}



	if (event.type=="swiperight")
	{
		switch (location.pathname)
	{
		case ("/timetable_mon.html"):
		return "timetable_sun.html";
		break;

		case ("/timetable_tue.html"):
		return "timetable_mon.html";
		break;

		case ("/timetable_wen.html"):
		return "timetable_tue.html";
		break;
		
		case ("/timetable_thur.html"):
		return "timetable_wen.html";
		break;
		
		case ("/timetable_fri.html"):
		return "timetable_thur.html";
		break;
		
		case ("/timetable_sat.html"):
		return "timetable_fri.html";
		break;
		
		case ("/timetable_sun.html"):
		return "timetable_sat.html";
		break;
	}
	}
}


$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "body.content" ).on( "swipeleft", swipeHandler );
 
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
   var myView = new steroids.views.WebView(getnexttitle( event ));
steroids.layers.push({view: myView, animation: MoveLeft});}
  
});
$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "body.content" ).on( "swiperight", swipeHandler );
 
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
  	
   var myView = new steroids.views.WebView(getnexttitle ( event ));
steroids.layers.push({view: myView, animation: MoveRight});}
  
});

