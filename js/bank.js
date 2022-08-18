document.getElementById('submit-button').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-password');
    const pass = passField.value;
    if (email === 'srabony@gmail.com' && pass === 'secret') {

        window.location.href = 'bank.html';
    }
    else {
        alert('please correct your email or password');
    }

})