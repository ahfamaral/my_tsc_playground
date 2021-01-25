"use strict";
var unknownUserInput;
var anyUserInput;
var userName;
unknownUserInput = 5;
unknownUserInput = 'SomeString';
anyUserInput = 10;
anyUserInput = 'AnotherString';
userName = anyUserInput;
if (typeof unknownUserInput === 'string') {
    userName = unknownUserInput;
}
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
generateError(userName, 500);
