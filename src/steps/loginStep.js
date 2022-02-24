import BaseStep from "src/steps/baseStep";
import LoginPage from "src/pages/loginPage";

async function login({ email, password }) {
  await BaseStep.Open();
  await LoginPage.enterEmail(email);
  await LoginPage.enterPassword(password);
  await LoginPage.clickLogin();
}

const LoginStep = {
  Login: login,
};

export default LoginStep;
