const username = 'test';
const password = '1234';

const root = document.getElementById("root");
const body = document.querySelector('body');

//Skapar funktion för att kunna återanvända element på flera sidor (loginPage+errorPage)
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

    root.appendChild(header);
    header.appendChild(usernameInput);
    header.appendChild(passwordInput);
    header.appendChild(loginButton);

    return header;
}

function loginPage() {
    const body = document.querySelector('body');
    const loginForm = createsLoginForm();
    body.appendChild(loginForm);
}

//Återanvänder funktionen ovan för skapa loginformuläret.
function errorPage(){
    const loginForm = createsLoginForm();
    body.appendChild(loginForm);
    //Lägger sedan till felmeddelandet om användaren använder fel användarnamn/lösen.
    const wrongInputMessage = document.createElement('h1');
    wrongInputMessage.textContent = 'Oj, du skrev in fel användarnamn eller lösenord. Försök igen!';
    body.appendChild(wrongInputMessage);
}

function welcomePage() {
    const header = document.createElement('header');

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logga ut';
    logoutButton.id = 'logoutButton';

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Välkommen till den tomma sidan! Sitt en stund och reflektera så kommer du snart att inse att den inte alls är tom.';
    

    root.appendChild(header);
    header.appendChild(logoutButton);
    root.appendChild(welcomeMessage);

}

function navigateTo(page){
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


navigateTo('welcome');