Raphael.fn.ngon = function(n) {
  var path = "", radius = 360/n;
  for (var i = 0; i <= n; i++) {
    var a = i * 60, x = radius * Math.cos(a * Math.PI / 180), y = radius * Math.sin(a * Math.PI / 180);
    path += (i == 0 ? "M" : "L") + x + "," + y;
  }
  path += "Z";
  return this.path(path);
}