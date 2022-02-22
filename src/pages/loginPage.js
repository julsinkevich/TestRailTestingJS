const LOGIN_SELECTOR = {
  INPUT_USERNAME: "#name",
  INPUT_PASSWORD: "#password",
  BTN_SUBMIT: "#button_primary",
};

async function enterEmail(username) {
  await $(LOGIN_SELECTOR.INPUT_USERNAME).setValue(username);
}

async function enterPassword(password) {
  await $(LOGIN_SELECTOR.INPUT_PASSWORD).setValue(password);
}

async function clickLogin() {
  await $(LOGIN_SELECTOR.BTN_SUBMIT).click();
}

const LoginPage = {
  enterEmail,
  enterPassword,
  clickLogin,
};

export default LoginPage;
