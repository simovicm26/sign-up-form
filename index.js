let errorMessage = document.querySelector('#error-message');

let errorMessageSecond = document.querySelector('#error-message-second')

let confirmPassword;

let email;

let password;

let button = document.querySelector('button');

function validatePassword(){

    email = document.querySelector('#mail').value;

    emailArray = email.split('');

    password = document.querySelector('#password').value;

    confirmPassword = document.querySelector('#confirm-password').value;

    passwordArray = password.split('');
    
    confirmPasswordArray = confirmPassword.split('');
    
    for(i=0;i<passwordArray.length;i++){
        if(passwordArray[i] !== confirmPasswordArray[i]){
            errorMessage.textContent = 'Please make sure the passwords match';
            break;
        } else{
            errorMessage.textContent = '';
        }

    }
    let x = 0;

    for(i=0;i<=emailArray.length;i++){
        if(emailArray[i] === '@'){
            x += 1;
        }     
    }
    if( x !== 1){
        errorMessageSecond.textContent = 'Please enter a valid email';
    } else{
        errorMessageSecond.textContent = '';
    }
}

button.addEventListener('click', function(){
    validatePassword();
});