'use strict'

let a = +prompt()
let sum = 1;
while (a > 0) {
    sum *= a % 10;
    a = (a - a % 10)/ 10;
}
console.log(sum);

document.getElementsByClassName('result')[0].innerHTML = sum;

