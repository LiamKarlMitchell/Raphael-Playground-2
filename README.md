Raphael-Playground-2
====================

We needed a better way to test things in Raphaël, our internet was having issues that week so I decided to improve the existing Raphaël Playground and add bigger area to edit and live updates.

See the snippets folder for example code you could put in the edit box.

Any raphael code should work the canvas instance is called paper.

[Try it out here](http://htmlpreview.github.io/?https://github.com/LiamKarlMitchell/Raphael-Playground-2/blob/master/index.html)

````
paper.path('m100,100 l100,0 l0,100 l-100,0 z').attr('fill','#FF0000');
````


````
paper.path_text('m100,100 l100,0 l0,100 l-100,0 z','1',{ 'font-size': '30pt', 'font-weight': 'bold', fill: '#00F',stroke: "#000", "stroke-width": 4, "stroke-opacity": 0.25 },{ hover: function() {
  this[1].attr({'fill-opacity': '0.5', 'opacity': '0.5'});
}, unhover: function() {
  this[1].attr({'fill-opacity': '0.0', 'opacity': '0.0'});
} })
````
