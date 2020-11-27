//scope Example
var a=20; // global
console.log(sum());
function sum() 
{
  var a = 5;    // accessible in secondNumber() because no varible named 'a' in that function, this is local 
  function secondNumber() {
    var b = 10; 
    return a+b; // because of lexical scope 'a' accessed, if sum() doesn't have 'a' then it will access 'a' in global
  }

  return secondNumber();
}

