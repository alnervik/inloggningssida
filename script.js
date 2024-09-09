const root = document.getElementById("root");

function loginPage() {
    const header = document.createElement('header');

    const usernameInput = document.createElement('input');
    usernameInput.id = 'usernameInput';
    usernameInput.placeholder = 'Användarnamn';

    const passwordInput = document.createElement('input');
    passwordInput.id = 'passwordInput';
    passwordInput.placeholder = 'Lösenord';

    const body = document.querySelector('body');

    root.appendChild(header);
    header.appendChild(usernameInput);
    header.appendChild(passwordInput);
    
}

function errorPage(){
    const header = document.createElement('header');

    const usernameInput = document.createElement('input');
    usernameInput.id = 'usernameInput';
    usernameInput.placeholder = 'Användarnamn';

    const passwordInput = document.createElement('input');
    passwordInput.id = 'passwordInput';
    passwordInput.placeholder = 'Lösenord';

    const wrongInputMessage = document.createElement('h1');
    wrongInputMessage.textContent = 'Oj, du skrev in fel användarnamn eller lösenord. Försök igen!';

    const body = document.querySelector('body');

    root.appendChild(header);
    header.appendChild(usernameInput);
    header.appendChild(passwordInput);
    root.appendChild(wrongInputMessage);
}


//loginPage();
errorPage();