'use strict';
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const emailEl = form.elements.email.value.trim();
    const passwordEl = form.elements.password.value.trim();
    
    if (emailEl === '' || passwordEl === '') {
        return alert('All form fields must be filled in');
    }  
    const formData = {
        email: emailEl,
        password: passwordEl,
    }
    console.log(formData);

    form.reset();
});


