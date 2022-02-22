import getGeneratedProject from "../../utils/generatedProject";
import SETTINGS from "../../appsettings";
import { ADD_PROJECT_URI } from "../../api/constants/endpoints";
import restClient from "../../api/clients/restClient";
import { hasStatusCode } from "../../api/services/responseService";
import HTTP_STATUS_CODES from "../../api/constants/httpStatusCodes";

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
