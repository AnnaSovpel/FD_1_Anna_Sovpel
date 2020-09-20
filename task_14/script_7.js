'use strict'

let a = +prompt()
if (a > 0) {
    a *= (a % 10);
    a = (a - a % 10)/100;
    console.log(a);
}



// document.getElementsByClassName('result')[0].innerHTML = age;
// document.getElementsByClassName('result')[4].innerHTML = age;