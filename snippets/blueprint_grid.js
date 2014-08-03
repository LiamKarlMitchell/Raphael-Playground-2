Raphael.fn.blueprint_grid = function(x,y,width,height,cellSize,padding,options) {
  if (options === undefined) options = {};
  if (options.fill === undefined) options.fill = '#269';
  if (options.stroke === undefined) options.stroke = '#DDD';
  
  paper.rect(x,y,width,height).attr(options);
  var i;
  for (i=0;i<=Math.floor((width-padding)/cellSize); i++) {
      paper.path('M'+(x+padding + (cellSize * i))+','+(y+padding)+' l0,'+( Math.floor(( height-padding ) / cellSize) * cellSize )).attr(options);
  }
  for (var i=0;i<=Math.floor((height-padding)/cellSize); i++) {
      paper.path('M'+(x+padding)+','+(y+padding+ (cellSize * i))+' l'+( (Math.floor(( width-padding ) / cellSize ) * cellSize) )+',0').attr(options);
  }
}

// Example Usage
// paper.blueprint_grid(10,10,400,400,16,0);