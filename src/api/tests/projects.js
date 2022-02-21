import axios from 'axios';
import getGeneratedProject from "../../utils/generatedProject";
import SETTINGS from "../../appsettings";

const {USER_DATA: {EMAIL, PASSWORD}} = SETTINGS;

describe('Tasks API only', () => {
    describe('POST index.php?/api/v2/add_project', () => {
        it('It should POST a new project', async (done) => {
            const bodyProject = {
                name: getGeneratedProject.generatedName,
                announcement: getGeneratedProject.generatedAnnouncement
            };
            const response = await axios.post(SETTINGS.URL + 'index.php?/api/v2/add_project', bodyProject, {
                auth: {
                    username: EMAIL,
                    password: PASSWORD
                }
            });
            console.log(response)
        });
    });
});
