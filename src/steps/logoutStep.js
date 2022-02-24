import HomePage from "src/pages/homePage";

async function logout() {
  await HomePage.profile();
  await HomePage.logout();
}

const LogoutStep = {
  Logout: logout,
};

export default LogoutStep;
