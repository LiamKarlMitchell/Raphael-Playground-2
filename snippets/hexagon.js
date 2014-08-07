Raphael.fn.hexagon = function(radius) {
  var path = "";
  for (var i = 0; i <= 6; i++) {
    var a = i * 60, x = radius * Math.cos(a * Math.PI / 180), y = radius * Math.sin(a * Math.PI / 180);
    path += (i == 0 ? "M" : "L") + x + "," + y;
  }
  path += "Z";
  return this.path(path);
}