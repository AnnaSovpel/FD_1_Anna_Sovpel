'use strict'

function getCredid_if_you_are_18 () {
    let age = prompt('How old are you?',18)
    
    
    if (age == +age & +age >= 18) {
      getCredfitSum()
    }
    
    else if (age == +age & +age < 18) {
      alert ('you can\'t leave a request');
    }
    
    else if (age === age) {
      alert ('Please try again and enter a number');
    }
    
    }
    
    
    function getCredfitSum (){
    let sum = +prompt('Enter the amount',500)
    
    if (sum === + sum & sum <= 1000){
        document.write(`Your application for ${sum } $ will be accepted`);
    }
    else if (sum === + sum & sum > 1000){
        alert('Maximum loan amount - 1000$')
    }
    }
    
  
    getCredid_if_you_are_18();

