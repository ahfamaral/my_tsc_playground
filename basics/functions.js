"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printMyResult(n) {
    console.log('Result: ', n);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printMyResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(10, 11));
addAndHandle(10, 20, function (res) {
    console.log('cb calling arguments:', res);
});
