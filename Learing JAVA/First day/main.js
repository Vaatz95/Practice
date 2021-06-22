$(document).ready(function() { 

'use strict'
 paper.install(window);
 paper.setup(document.getElementById('mainCanvas'));
 
  /*var c;
  for(var x = 25; x<400; x += 50){
  	for( var y = 25; y<400; y += 50){
  		c = Shape.Circle(x , y , 20);
  		c.fillColor = 'green';
  	}
  }
*/


 var tool = new Tool();
 var c = Shape.Circle(200,200, 80);
 c.fillColor = 'black';
 var text = new PointText(200, 200);
 text.justification = 'center';
 text.fillColor = 'white';
 text.fontSize = '20';
 text.content = 'hello World';


 tool.onMouseDown = function(e){
 	var c = Shape.Circle(e.point.x , e.point.y , 20);
 	c.fillColor = 'green';
 }



 paper.view.draw()

});