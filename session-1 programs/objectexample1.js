//Object behaviour when passing through functions
function myFunc(theObject)  // object reference passed here
{
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; 
console.log(x);
myFunc(mycar); // output Honda
y = mycar.make;
console.log(y); // output Toyata
