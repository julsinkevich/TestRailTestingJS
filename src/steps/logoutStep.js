import HomePage from "../pages/homePage";

async function logout() {
  await HomePage.profile();
  await HomePage.logout();
}

const LogoutStep = {
  Logout: logout,
};

export default LogoutStep;
