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

    root.appendChild(header);
    header.appendChild(usernameInput);
    header.appendChild(passwordInput);

    //Så funktionen skickar tillbaka headern om funktionen används i koden.
    return header;
}

function loginPage() {
    const body = document.querySelector('body');
    const loginForm = createsLoginForm();
    body.appendChild(loginForm);
}

//Återanvänder funktionen ovan för skapa loginformuläret.
function errorPage(){
    const body = document.querySelector('body');
    const loginForm = createsLoginForm();
    body.appendChild(loginForm);
    //Lägger sedan till felmeddelandet om användaren använder fel användarnamn/lösen.
    const wrongInputMessage = document.createElement('h1');
    wrongInputMessage.textContent = 'Oj, du skrev in fel användarnamn eller lösenord. Försök igen!';
    body.appendChild(wrongInputMessage);
}


//loginPage();
errorPage();