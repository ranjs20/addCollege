import { faker } from "@faker-js/faker";

export const generateTestData = () => {
  return {
    dynamicCollege: {
      name: faker.company.name() + " University",
      domainName: faker.internet.domainName(),

      logoPath: "C:/Users/NITRo/Desktop/qa/Career_AddCollege/logoPhoto.jpg",
      accessType: "Default",
      featureProfile: "basic",
    },
    dynamicContact: {
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      website: "https://yip.com",
      number: "98" + faker.string.numeric(8),
    },
    dynamicAdmin: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      number: "99" + faker.string.numeric(8),
      designation: faker.person.jobTitle(),
    },
  };
};
