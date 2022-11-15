
//input[type="text"], input[type="password"], input[type="email"], input[type="number"], input[type="tel"]
let signupTextInputs = document.querySelectorAll('.card-form .signupForm fieldset input[type=text]');
let signupNumberInputs = document.querySelectorAll('input[type=number]');
let signupEmailInput = document.querySelector('.card-form .signupForm fieldset input[type=email]');
let signupTelInput = document.querySelector('input[type=tel]');
let submitButton = document.querySelector('.card-form .signupForm fieldset input[type=submit]');


function validateSignupInputs() {
    let valid = true;
    for(let i = 0; i < signupTextInputs.length; i++) {
        
        if(signupTextInputs[i].value == "") {
            valid = false;
            signupTextInputs[i].style.border = "1px solid red";
        }
        else{
            signupTextInputs[i].style.border = "none";
        }
       
    }
    
    if (signupEmailInput.value.length < 5) {
        valid = false;
    }
    if (signupTelInput.value.length < 9) {
        valid = false;
    }
    return valid;
}
submitButton.addEventListener("click", function () {
    let valid = validateSignupInputs();
    if(valid) {
        document.getElementById("password").style.display='block';
        
    } else {
        alert("Please fill in all the fields");
    }
},0);