import getGeneratedProject from "../../utils/generatedProject";
import {ADD_PROJECT_URI} from "../constants/endpoints";
import SETTINGS from "../../appsettings";
import restClient from "../clients/restClient";
import {hasStatusCode} from "../services/responseService";
import HTTP_STATUS_CODES from "../constants/httpStatusCodes";

const {USER_DATA: {EMAIL, PASSWORD}} = SETTINGS;
const USER = {email: EMAIL, password: PASSWORD};

describe('Projects API only', () => {
    describe('POST index.php?/api/v2/add_project', () => {
        it('It should method POST a new project', async (done) => {
            const bodyProject = {
                name: getGeneratedProject.generatedName,
                announcement: getGeneratedProject.generatedAnnouncement
            };

            const response = await restClient(ADD_PROJECT_URI).postRequest(bodyProject,
                USER);
            hasStatusCode(response.status, HTTP_STATUS_CODES.OK);
        });
    });
});
