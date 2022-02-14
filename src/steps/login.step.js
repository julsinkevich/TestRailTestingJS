import BaseStep from "./base.step";
import LoginPage from "../pages/login.page";

async function Login(email, password) {
    await BaseStep.Open();
    await LoginPage.enterEmail(email);
    await LoginPage.enterPassword(password);
    await LoginPage.clickLogin();
}

const LoginStep = {
    Login
};

export default LoginStep;
