import { faker } from "@faker-js/faker";

const getGeneratedProject = () => ({
  generatedName: faker.company.companyName(),
  generatedAnnouncement: faker.lorem.paragraph(),
});

export default getGeneratedProject();
