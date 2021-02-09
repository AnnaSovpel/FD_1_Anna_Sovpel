const root = document.querySelector('#root');

let mainContainer = document.createElement('div');
let mainContainerDivImg = document.createElement('div');
let mainContainerImg = document.createElement('img');
let mainContainerForm = document.createElement('div');
let mainContainerFormFlex = document.createElement('div');
let mainContainerFormFlexText = document.createElement('div');
let mainContainerFormSingUp = document.createElement('div')
let mainContainerFormInputUser = document.createElement('input');
let mainContainerFormInputPassword = mainContainerFormInputUser.cloneNode(true);
let mainContainerFormButton = document.createElement('div');
let mainContainerFormForgotUserName = document.createElement('div');


mainContainer.classList = "main_container";
mainContainerImg.src = "./pictures/form.jpg";
mainContainerForm.classList = 'main_container_Form';
mainContainerFormFlex.classList = 'main_container_Form__flex';
mainContainerFormSingUp.classList = 'main_container_Form__Sing_Up';
mainContainerFormSingUp.textContent = 'Sing up';
mainContainerFormFlexText.classList = 'main_container_Form__flex__text';
mainContainerFormFlexText.textContent = 'ACCOUNT LOGIN';
mainContainerFormInputUser.placeholder = 'User name or E-mail';
mainContainerFormInputPassword.placeholder = 'Password';
mainContainerFormInputPassword.type = 'password';
mainContainerFormInputUser.classList = 'main_container_Form_Input';
mainContainerFormInputPassword.classList = 'main_container_Form_Input';
mainContainerFormButton.classList = 'main_container_Form_button';
mainContainerFormButton.textContent = 'Sing in';
mainContainerFormForgotUserName.classList = 'main_container_Form_forgot_UN';
mainContainerFormForgotUserName.textContent = 'Forgot User Name / password?';


mainContainer.append(mainContainerDivImg);
mainContainerDivImg.append(mainContainerImg);
mainContainer.append(mainContainerForm);
mainContainerForm.append(mainContainerFormFlex);
mainContainerForm.append(mainContainerFormSingUp);
mainContainerFormFlex.append(mainContainerFormFlexText);
mainContainerFormFlex.append(mainContainerFormInputUser);
mainContainerFormFlex.append(mainContainerFormInputPassword);
mainContainerFormFlex.append(mainContainerFormButton);
mainContainerFormFlex.append(mainContainerFormForgotUserName);


root.append(mainContainer);
