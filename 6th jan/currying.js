//currying
function volume(a, b, c) {
    return a * b * c;
}

let getVolume = get(volume);

function get(volume) {
    return function recursion() {
        let arr = Array.from(arguments);
        if (arr.length >= volume.length) {
            return volume.apply(this, arr);
        } else {
            return function() {
                let args = Array.from(arguments);
                return recursion.apply(this, arr.concat(args));
            }
        }
    };
}
console.log(getVolume(10, 20, 30));
console.log(getVolume(10, 20)(30));
console.log(getVolume(10)(20)(30));

//In partial application
let value = getVolume(20, 30);
console.log(fun(value, 10));

function fun(val, a) {
    return val(a * Math.random());
}