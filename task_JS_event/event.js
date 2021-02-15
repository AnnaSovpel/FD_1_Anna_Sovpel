const root = document.getElementById('root');
const mainContent = document.createElement('div');

const btnRed = document.createElement('button');
const btnGreen = document.createElement('button');
const btnBlue = document.createElement('button');
const btnPlus = document.createElement('button');
const btnMinus = document.createElement('button');
let content = document.createElement('div');
let contentSize = getComputedStyle(content);

mainContent.classList.add('mainContent');
btnRed.textContent = 'Red';
btnGreen.textContent = 'Green';
btnBlue.textContent = 'Blue';
btnPlus.textContent = '+';
btnMinus.textContent = '-';
content.style.fontSize = '15px'
content.textContent = 'This text changes color when you click on the button and changes size when you click plus or minus(or even enter from the keyboard)';

function GetRedColor (){
    content.style.color = 'red';
}
function GetGreenColor (){
    content.style.color = 'green';
}
function GetBlueColor (){
    content.style.color = 'blue';
}
function GetPlusSize (){
    content.style.fontSize = `${parseInt(contentSize.fontSize) + 1}px`;
}
function GetMinusSize (){
    content.style.fontSize = `${parseInt(contentSize.fontSize) - 1}px`;
}

function GetDisabled (event){
    if (event.target == btnRed){
        btnRed.disabled = true;
    } else if (event.target == btnGreen) {
        btnGreen.disabled = true;
    } else if (event.target == btnBlue) {
        btnBlue.disabled = true;
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
btnRed.addEventListener('click', GetRedColor);
btnGreen.addEventListener('click', GetGreenColor);
btnBlue.addEventListener('click', GetBlueColor);
btnPlus.addEventListener('click', GetPlusSize);
btnMinus.addEventListener('click', GetMinusSize);
document.addEventListener('keypress', TouchBtnOfSize);

mainContent.append(btnRed);
mainContent.append(btnGreen);
mainContent.append(btnBlue);
mainContent.append(btnPlus);
mainContent.append(btnMinus);
mainContent.append(content);


root.append(mainContent);