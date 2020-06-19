var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result: " + num);
};
//  Callback
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
console.log(printResult(add(5, 12)));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
