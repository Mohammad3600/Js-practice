//Fuction Expression can be passed through functions Example
function map(f, a) 
{
  let result = []; 
  let i; 
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {return x * x * x; }
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers); // passing function Expression
console.log(cube);