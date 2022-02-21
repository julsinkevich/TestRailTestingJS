const {faker} = require("@faker-js/faker");

let getGeneratedProject = () => ({
    generatedName: faker.company.companyName(),
    generatedAnnouncement: faker.lorem.paragraph(),
    generatedShowAnnouncement: faker.random.boolean(),
    generatedSuiteMode: faker.random.boolean()
})

export default getGeneratedProject();
