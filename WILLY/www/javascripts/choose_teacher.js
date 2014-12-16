 
 $(document).ready(function(){
 $(".grid").click(function() {
 	var el=document.getElementById(this.id);
 	var bg=$(el).css('background-color');
if (bg=="rgba(0, 0, 0, 0)" || bg=="rgb(255, 255, 255)"){
 $(el).stop().animate({ backgroundColor: "#E7E7E7"}, 600);
}

else {$(el).stop().animate({ backgroundColor: "#FFFFFF"}, 600);
}
 });
 });