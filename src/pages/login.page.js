const LOGIN_SELECTOR = {
    INPUTUSERNAME: '#name',
    INPUTPASSWORD: '#password',
    BTNSUBMIT: '#button_primary'
};

async function enterEmail(username) {
    await $(LOGIN_SELECTOR.INPUTUSERNAME).setValue(username);
}

async function enterPassword(password) {
    await $(LOGIN_SELECTOR.INPUTPASSWORD).setValue(password);
}

async function clickLogin() {
    await $(LOGIN_SELECTOR.BTNSUBMIT).click();
}

const LoginPage = {
    enterEmail,
    enterPassword,
    clickLogin
};

export default LoginPage;