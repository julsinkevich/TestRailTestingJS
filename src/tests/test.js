import SETTINGS from "../appsettings";
let chai = require("chai");
let chaiHttp = require("chai-http");
import getGeneratedProject from "../utils/generatedProject";

chai.should();

chai.use(chaiHttp);

describe('Tasks API only', () => {
    describe('POST index.php?/api/v2/add_project', () => {
        it('It should POST a new project', async (done) => {
            const bodyProject = {
                name: getGeneratedProject.generatedName,
                announcement: getGeneratedProject.generatedAnnouncement,
                show_announcement: getGeneratedProject.generatedShowAnnouncement,
                suite_mode: getGeneratedProject.generatedSuiteMode
            };

           await chai.request(SETTINGS.URL)
                .post('index.php?/api/v2/add_project')
                .send(bodyProject)
                .then((err, response)=>{
                response.should.have.status(200);

                    console.log(err)
                done();
            });
        });
    });
});
