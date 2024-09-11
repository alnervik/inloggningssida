const username = 'test';
const password = '1234';

const root = document.getElementById("root");
//const body = document.querySelector('body');

function createsLoginForm() {
    const header = document.createElement('header');

    const usernameInput = document.createElement('input');
    usernameInput.id = 'usernameInput';
    usernameInput.placeholder = 'Användarnamn';

    const passwordInput = document.createElement('input');
    passwordInput.id = 'passwordInput';
    passwordInput.placeholder = 'Lösenord';

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Logga in';
    loginButton.id = 'loginButton';

    //root.appendChild(header);
    header.appendChild(usernameInput);
    header.appendChild(passwordInput);
    header.appendChild(loginButton);

    return header;
}

function loginPage() {
    root.innerHTML = '';
    //const root = document.querySelector('root');
    const loginForm = createsLoginForm();
    root.appendChild(loginForm);

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', verifyLogin);
}

function errorPage(){
    root.innerHTML = '';
    const loginForm = createsLoginForm();
    root.appendChild(loginForm);

    const wrongInputMessage = document.createElement('h1');
    wrongInputMessage.textContent = 'Oj, du skrev in fel användarnamn eller lösenord. Försök igen!';
    root.appendChild(wrongInputMessage);
}

function welcomePage() {
    root.innerHTML = '';
    const header = document.createElement('header');

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logga ut';
    logoutButton.id = 'logoutButton';

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Välkommen till den tomma sidan! Sitt en stund och reflektera så kommer du snart att inse att den inte alls är tom.';
    

    root.appendChild(header);
    header.appendChild(logoutButton);
    root.appendChild(welcomeMessage);

    logoutButton.addEventListener('click', function() {
        navigateTo('login');
    });
}

function verifyLogin() {
    const submittedUsername = document.getElementById('usernameInput').value;
    const submittedPassword = document.getElementById('passwordInput').value;

    if (submittedUsername == username && submittedPassword == password) {
        navigateTo('welcome');
    }   else {
        navigateTo('error');
    }
}

function navigateTo(page){
    root.innerHTML = '';
    switch(page) {
        case 'login':
            loginPage();
            break;
        case 'error':
            errorPage();
            break;
        case 'welcome':
            welcomePage();
            break;
        default:
            loginPage();
    }
}


navigateTo('login');