
//Hoisting is not worked for function expression
var x = square(4) ; // not hoisted
var square = function(number) { return number * number }


var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
console.log(factorial(3))