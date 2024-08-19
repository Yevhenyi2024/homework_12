function summarize(num) {
    return function(arg) {
        let valueToAdd;
if (arg !== undefined) {
    valueToAdd = arg;
} else {
    valueToAdd = 1;
}
        return num + valueToAdd;
    };
}
const addFive = summarize(5);
console.log(addFive(3));
console.log(addFive());   
