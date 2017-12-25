var a = prompt('Type A', 1);
var b = prompt('Type B', 1);
var c = prompt('Type C', 1);
console.log(a + 'x2 + ' +b + 'x +'  +c);
var d = b*b -4*a*c;

if (d>0) {
  var x1 = -b + Math.sqrt(d)/2*a;
  var x1 = -b - Math.sqrt(d)/2*a;
  console.log('x1 = ' + x1 + ', x2 = ' + x2);
}
else if (d < 0) {
  console.log("Действительных корней нет");
}
else {
  var x = -b/(2*a);
}
