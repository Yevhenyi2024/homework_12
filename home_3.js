function sequence(...fns) {
    return function(initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
}
function addTwo(x) {
    return x + 2;
}
function multiplyByThree(x) {
    return x * 3;
}
function subtractFive(x) {
    return x - 5;
}
const mySequence = sequence(addTwo, multiplyByThree, subtractFive);
console.log(mySequence(5)); 
