const form = document.getElementById('form');
const returnButton = document.getElementById('return-btn');

let isValid = true;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');


    if (!validateEmail(email)) {
        errorMessage.style.visibility = 'visible';
        document.querySelector('#email').style.border = '1px solid var(--tomato)';
        document.querySelector('.mail').classList.add('placeholder-red');
        document.querySelector('.container').classList.add('hide');
        document.querySelector('.main').classList.remove('hide');
        isValid = false;
    } else {
        errorMessage.style.visibility = 'hidden';
        document.querySelector('#email').style.border = '1px solid var(--grey)';
        document.querySelector('.mail').classList.add('placeholder-grey');
        isValid = true;
    }

    if (isValid) {
        document.querySelector('.container').classList.remove('hide');
        document.querySelector('.main').classList.add('hide');
        document.querySelector('#span').innerHTML = `${email}`;
        form.reset();
    }
});

returnButton.addEventListener('click', () => {
    document.querySelector('.container').classList.add('hide');
    document.querySelector('.main').classList.remove('hide');
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


