'use strict'

function getCredid_if_you_are_18 () {
    let age = prompt('How old are you?',18)
    
    if (!isNaN(age) && +age >= 18) {
      getCredfitSum()
    } else if (!isNaN(age) && +age < 18) {
      alert ('you can\'t leave a request');
    } else if (isNaN(age)) {
      alert ('Please try again and enter a number');
      getCredid_if_you_are_18();
    }
    
}
    
function getCredfitSum () {
    let sum = prompt('Enter the amount',500)
    
    if (!isNaN(sum) && sum <= 1000 && sum !== ''){
        document.write(`Your application for ${sum } $ will be accepted`);
    } else if (!isNaN(sum) && sum > 1000){
        alert('Maximum loan amount - 1000$')
    } else if (isNaN(sum)){
      alert ('Please try again and enter a number witout spaces');
      getCredfitSum ();
    } 
}
    
  
    // getCredid_if_you_are_18();

