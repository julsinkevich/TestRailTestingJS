import SETTINGS from "src/appsettings";
import restClient from "src/api/clients/restClient";
import { ADD_PROJECT_URI } from "src/api/constants/endpoints";
import HTTP_STATUS_CODES from "src/api/constants/httpStatusCodes";
import { hasStatusCode } from "src/api/services/responseService";
import getGeneratedProject from "src/utils/generatedProject";

const {
  USER_DATA: { EMAIL, PASSWORD },
} = SETTINGS;
const USER = { email: EMAIL, password: PASSWORD };
const bodyProject = {
  name: getGeneratedProject.generatedName,
  announcement: getGeneratedProject.generatedAnnouncement,
};

describe("Projects API only", () => {
  describe("POST index.php?/api/v2/add_project", () => {
    it("It should method POST a new project", async (done) => {
      const response = await restClient(ADD_PROJECT_URI).postRequest(
        bodyProject,
        USER
      );

      hasStatusCode(response.status, HTTP_STATUS_CODES.OK);
    });
  });
});
