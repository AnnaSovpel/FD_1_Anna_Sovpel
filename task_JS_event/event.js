const root = document.getElementById('root');
const mainContent = document.createElement('div');
const parentBtnColor = document.createElement('div')
const btnRed = document.createElement('button');
const btnGreen = document.createElement('button');
const btnBlue = document.createElement('button');
const btnPlus = document.createElement('button');
const btnMinus = document.createElement('button');
const content = document.createElement('div');
const contentSize = getComputedStyle(content);

btnRed.textContent = 'Red';
btnGreen.textContent = 'Green';
btnBlue.textContent = 'Blue';
btnPlus.textContent = '+';
btnMinus.textContent = '-';
content.style.fontSize = '15px'
content.textContent = 'This text changes color when you click on the button and changes size when you click plus or minus(or even enter from the keyboard)';

function GetColor (event){
    if(event.target.textContent == 'Red') {
        content.style.color = 'red';
    } else if (event.target.textContent == 'Green'){
        content.style.color = 'green'
    } else if (event.target.textContent == 'Blue'){
        content.style.color = 'blue'
    }
}

function GetPlusSize (){
    content.style.fontSize = `${parseInt(contentSize.fontSize) + 1}px`;
}
function GetMinusSize (){
    content.style.fontSize = `${parseInt(contentSize.fontSize) - 1}px`;
}

function GetDisabled (event){
    if (event.target == btnRed || event.target == btnGreen || event.target == btnBlue){
        event.target.disabled = true;
    } 
}

function TouchBtnOfSize(event) {
    if (event.keyCode == 43 || event.keyCode == 61){
        content.style.fontSize = `${parseInt(contentSize.fontSize) + 1}px`;
    } else if (event.keyCode == 45){
        content.style.fontSize = `${parseInt(contentSize.fontSize) - 1}px`;
    }
}

mainContent.addEventListener('click', GetDisabled)
parentBtnColor.addEventListener('click', GetColor)
btnPlus.addEventListener('click', GetPlusSize);
btnMinus.addEventListener('click', GetMinusSize);
document.addEventListener('keypress', TouchBtnOfSize);

mainContent.append (parentBtnColor, btnPlus, btnMinus, content);
parentBtnColor.append (btnRed, btnGreen, btnBlue)

root.append(mainContent);