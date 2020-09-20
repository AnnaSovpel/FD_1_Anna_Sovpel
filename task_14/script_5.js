'use strict'

let userName = prompt('What is your name?');
let answer = 'Hello, ';
let result = answer + userName;
let invalidName = 'Invalid name';



if (userName.trim() == '') {
console.log(invalidName);
}
else {
console.log (result);
}
