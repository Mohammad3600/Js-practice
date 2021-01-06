//snippet 1
let arr = [1, 2, 3];
//for in and for loop gives you access in index
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}

for (let i in arr) {
    console.log(arr[i]);
}

//forEach and for of gives us access to values
arr.forEach(function(v, i) { console.log(v) });

for (const v of arr) {
    console.log(v);
}

//snippet 2
//for in doesnot ignores the non-numeric keys others loops do
let a = [1, 2, 3];
a['val'] = '4';
for (let i in a) {
    console.log(a[i]);
}


//snippet 3
//for/of and for loop gets the empty elements
let arr1 = [1, 2, , 4];
for (let i = 0; i < arr1.length; ++i) {
    console.log("from for ", arr1[i]);
}

arr1.forEach(v => console.log("from forEach ", v));

for (let i in arr1) {
    console.log("from for/in ", arr1[i]);
}

for (const v of arr1) {
    console.log("from for/of ", v);
}


//snippet 4
//this refers to for, for/in, and for/of retain the outside scope's value of this, 
//but the forEach() callback will have a different this unless you use an arrow function.
'use strict';
let arr = ['a'];
arr.forEach(function() {
    console.log(this);
});
for (let i = 0; i < arr.length; i++) {
    console.log(this);
}


//snippet 5
let arr = [1, 2, 3, 4, 5];
console.log(arr.forEach(function(val) {
    return val;
}));

//map
let arr = [1, 2, 3, 4, , 5];
console.log(arr.map(function(val) {
    return val * 2;
}));
//for of gives u undefined in 4th position but map shows you empty
for (i of arr)
    console.log(i);


//filter
let arr = [10, 203, 4, 55, 6, 1, 33];
let result = arr.filter(function(i) {
    if (i > 10)
        return arr;
})
console.log(arr, result);

console.log(arr.map(function(i) {
    if (i > 10)
        return i;
}));

//reduce

let arr = [
    [10, 20],
    ['mohammad', 'hai'],
    [true, false]
];
let reduce = arr.reduce(function(acc, cur) {
    return acc.concat(cur);
})
console.log(reduce);