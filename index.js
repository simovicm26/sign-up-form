let emailInput = document.querySelector('#mail');

let errorMessage = document.querySelector('#error-message');

let button = document.querySelector('button');

let password = document.querySelector('#password');

let confirmPassword = document.querySelector('#confirm-password');

let secondErrorMessage = document.querySelector('#error-message-second');

emailInput.addEventListener('change',function(){
checkEmail();
})

function checkEmail(){
    const emailArray = emailInput.value.split('');
    console.log(emailArray)
    let x = 0;
    for(i=0;i<emailArray.length;i++){
        if(emailArray[i]==='@'){
            x += 1;
        }
    }
    if (x !== 1){
        errorMessage.textContent = 'Please enter a valid email.';
        button.classList.add('disabled');
    } else{
        errorMessage.textContent = '';
        button.classList.remove('disabled');
    }
}
password.addEventListener('change', function(){
    verifyPassword();
})
confirmPassword.addEventListener('change',function(){
    verifyPassword();
})

function verifyPassword(){
    const passArray = password.value.split('');
    const confirmPassArray = confirmPassword.value.split('');
    let x = 0;
    for(i = 1 ;i <= 20; i++){
        if(confirmPassArray[i] !== passArray[i]){
            x = 1;
            break;
        }
    }
    if(x === 1) {
        button.classList.add('disabled-second');
        secondErrorMessage.textContent = 'Please enter a matching password.';
    } else {
        button.classList.remove('disabled-second');
        secondErrorMessage.textContent = '';
    }
}