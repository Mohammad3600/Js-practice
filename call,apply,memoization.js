//snippet 1
let cat = {
    sound: "meow",
    talk: function() {
        console.log(this.sound);
    }
}
let talkfun = cat.talk;
talkfun();
talkfun = cat.talk.bind(cat);
talkfun();

//snippet 2
let x = 5;
let obj = {
    x: 10,
    getx: function() {
        console.log(x);
    }
}
let fun = obj.getx;
fun();
fun = fun.bind(obj);
fun();

//snippet 3
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}

let cheese = new Food('pizza', 200);
let fun = new Toy('Woody', 40000);
console.log(cheese.name);
console.log(fun.name);

//snippet 4
var sound = "hello";

function talk() {
    console.log("I talk " + this.sound);
}
let cat = { sound: "meow" };
let dog = { sound: "bow" };
talk.call(cat);
talk.call(dog);
talk.apply();
console.log();

//memoization snippet
function recursiveFib(n) {
    if (n <= 1) { return n }
    return recursiveFib(n - 1) + recursiveFib(n - 2)
}

function fibonacci(n, memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return n
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}