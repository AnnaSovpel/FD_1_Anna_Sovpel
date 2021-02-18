const root = document.querySelector('#root')
const main = document.createElement('div')
const input = document.createElement('input')
const input2 = document.createElement('input')
const button = document.createElement('button')
const message = document.createElement('p')

input.type = 'password'
input2.type = 'password'
button.textContent = 'Click'

function GetClick (){
    if ( input.value == '' && input2.value == ''){
        message.textContent = 'The form can\'t\ be empty'
        main.append(message)
    } else if (input.value != input2.value){
        message.textContent = 'Please try again'
        main.append(message)
    } else if(input.value === input2.value){
        message.textContent = 'Your password is right'
        main.append(message)
    }
}

function GetFastText(){
    let a = input.value;
    let b = input2.value;
    for (let i = 0; i < b.length; i++){
        if(a[i] != b[i]) {
            message.textContent = 'passwords don\'t\ match'
            main.append(message)
            break
        } 
    }
}

button.addEventListener('click', GetClick)
input2.addEventListener('keyup', GetFastText)
main.append(input, input2, button)
root.append(main);

document.onkeypress = function(event){
    if (event.keyCode == 13){
        GetClick()
    }
}