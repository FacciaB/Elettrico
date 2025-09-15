// Registrazione
function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (!username || !password) {
        document.getElementById('message').innerText = "Compila tutti i campi!";
        return;
    }

    // Salva nel localStorage
    localStorage.setItem('user_' + username, password);
    document.getElementById('message').innerText = "Registrazione avvenuta!";
}

// Login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const savedPassword = localStorage.getItem('user_' + username);

    if (savedPassword && savedPassword === password) {
        document.getElementById('message').innerText = "Login riuscito!";
    } else {
        document.getElementById('message').innerText = "Username o password errati!";
    }
}
