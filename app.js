const email = document.getElementById('email');
const form = document.getElementById('form');
const icon = document.getElementById('error-icon');
const message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = email.value.trim();

    if(emailValue === '') {
        icon.classList.add('error');
        message.classList.add('error');
    } else if(!isEmail(emailValue)) {
        icon.classList.add('error');
        message.classList.add('error');
    } else {
        icon.className = 'error-icon';
        message.className = 'error-message';
        alert('Success!');
        email.value = '';
    }
})

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
