"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
//  Never Type
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError('An error occurred!', 500);
