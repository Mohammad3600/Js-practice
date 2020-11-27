var list=document.querySelector("#list");
var node1=document.createElement('li');
var text1=document.createTextNode('item7');
node1.appendChild(text1);
list.appendChild(node1);
list.childNodes.style.background = "rgb(255,0,0)";
console.log(list.childNodes);