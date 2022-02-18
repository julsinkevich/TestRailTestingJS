export const HOMEPAGE_SELECTOR = {
    USERNAME: '.navigation-username',
    LOGOUT: '#navigation-user-logout'
}

async function profile() {
    await $(HOMEPAGE_SELECTOR.USERNAME).click();
}

async function logout() {
    await $(HOMEPAGE_SELECTOR.LOGOUT).click();
}

const HomePage = {
    profile,
    logout
}

export default HomePage;
