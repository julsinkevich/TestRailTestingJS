import SETTINGS from "../../appsettings";

const {USER_DATA: {EMAIL, PASSWORD}} = SETTINGS;

export const URL = SETTINGS.URL;
export const AUTH = {
    username: EMAIL,
    password: PASSWORD
}
export const PREFIX = 'index.php?/api/v2/';
export const ADD_PROJECT_URN = 'add_project';
