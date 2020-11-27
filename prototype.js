function PrintStuff (myDocuments) {
this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
console.log(this.documents);
}
var newObj = new PrintStuff ("I am a new Object and I can print.");
newObj.print (); //I am a new Object and I can print.