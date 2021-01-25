"use strict";
console.log('Code goes here!');
function addAndPrint(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var logText = 'Result is ';
addAndPrint(number1, number2, printResult, logText);
