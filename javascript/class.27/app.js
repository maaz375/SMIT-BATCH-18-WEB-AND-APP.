var signinEmail = document.getElementById('signinEmail');
var signinPass = document.getElementById('signinPass');

var signupEmail = document.getElementById('signupEmail');
var signupPass = document.getElementById('signupPass');


function signUp() {
    var email = signupEmail.value
    var password = signupPass.value

    var signUpData = {
        email: email,
        password: password
    };

    localStorage.setItem('auth', JSON.stringify(data));

    window.location.href = 'signin.html';

};


function signIn() {
    var email = signinEmail.value
    var password = signinPass.value

    var storage = JSON.parse(localStorage.getItem('auth'));

    if (email === storage.email && password === storage.password) {
        alert('sign in sucess')

    window.location.href = 'home.html';
    }else{
    alert('wrong credentials')
    }
};