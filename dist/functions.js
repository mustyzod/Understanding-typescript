"use strict";
const addition = (n1, n2) => {
    return n1 + n2;
};
const printResultFunc = (num) => {
    console.log("Result: " + num);
};
//  Callback
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
console.log(printResultFunc(addition(5, 12)));
let combineValues;
combineValues = addition;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
