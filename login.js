const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === '' || password === ''){
        errorMessage.textContent = 'Please fill all fields';
        return;
    }

    if(email === 'user@example.com' && password === 'password'){
        location.href = "./dashboard.html";
    }
    else if(email === 'user@example2.com' && password === 'password2'){
        location.href = "./dashboard2.html";
    }
    else{
        errorMessage.textContent = 'Invalid email or password';
    }

})