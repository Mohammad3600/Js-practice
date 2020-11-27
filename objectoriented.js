//Object oriented Programming
function User(theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}

User.prototype = {
    constructor: User,
    saveScore: function(theScoreToAdd) {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores: function() {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    }
}
firstUser = new User("Richard", "Richard@examnple.com"); //is same as User.call()
firstUser = User.call({}, 'Richrad', 'r@gmail.com');

firstUser.saveScore(15);
firstUser.saveScore(10);
firstUser.showNameAndScores();
console.log(firstUser.constructor);

firstUser.showNameAndScores = function() {
        var scores = this.quizScores.length > 0 ? this.quizScores.join("->") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    } //Override

//snippet2
function Fruit() {}
var newFruit = new Fruit();
console.log(newFruit.constructor); // Fruit ()

//snippet3
var cars = {
    type: "sedan",
    wheels: 4
};
// We want to inherit from the cars object, so we do:
var swift = Object.create(cars); // now swift inherits the properties from cars
console.log(swift.type);

//snippet4
function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}
let person1 = new Person('Bob');
let person2 = new Person('Sarah');
person1.name
person1.greeting()
person2.name
person2.greeting()