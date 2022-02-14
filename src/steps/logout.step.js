import HomePage from "../pages/home.page";

async function Logout() {
    await HomePage.profile();
    await HomePage.logout();
}

const LogoutStep = {
    Logout
};

export default LogoutStep;
