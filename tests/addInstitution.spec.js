import { test } from "@playwright/test";
import { generateTestData } from "../utils/testData.js";
import { validateUser } from "../pages/loginPage.js";
import * as collegePage from "../pages/addInstitution.js";

const data = generateTestData();

test("Should create a college with random data using Faker", async ({
  page,
}) => {
  await page.goto(process.env.BASE_URL);
  await validateUser(page, process.env.EMAIL, process.env.PASSWORD);

  await collegePage.navigateToAddCollege(page);

  await collegePage.uploadLogo(page, data.dynamicCollege.logoPath);

  await collegePage.fillBasicInfo(page, data.dynamicCollege);

  await collegePage.fillContactInfo(page, data.dynamicContact);

  await collegePage.fillAdminInfo(page, data.dynamicAdmin);

  await collegePage.selectTags(page);

  await collegePage.submitCollegeForm(page);
});
