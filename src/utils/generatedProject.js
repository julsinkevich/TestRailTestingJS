const {faker} = require("@faker-js/faker");

let getGeneratedProject = () => ({
    generatedName: faker.company.companyName(),
    generatedAnnouncement: faker.lorem.paragraph()
})

export default getGeneratedProject();
