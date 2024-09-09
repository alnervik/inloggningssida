function loginPage() {
    const header = document.createElement('header');

    const usernameInput = document.createElement('input')
    usernameInput.id = 'usernameInput';
    usernameInput.placeholder = 'Användarnamn';

    const passwordInput = document.createElement('input')
    passwordInput.id = 'passwordInput';
    passwordInput.placeholder = 'Lösenord';

    const body = document.querySelector('body');

    body.appendChild(header);
    header.appendChild(usernameInput);
    header.appendChild(passwordInput);
}

loginPage();