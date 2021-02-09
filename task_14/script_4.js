'use strict'
let num = prompt(); 
let symbol = prompt();
let num_2 = prompt();


if (symbol == '-') {
    let difference = num - num_2;
    console.log (difference);
    alert (difference);
}
if (symbol == '*') {
    let multiplication = num * num_2;
    console.log (multiplication);
    alert (multiplication);
}
if (symbol == '/') {
    let division = num / num_2;
    console.log (division);
    alert (division);
}
if (symbol == '+') {
    console.log (+num + +num_2);
    alert (+num + +num_2);
}