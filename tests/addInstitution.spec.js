import { test } from "@playwright/test";
import { validateUser } from "../pages/loginPage";
import { addCollege } from "../pages/addInstitution";

test.describe("Add College", () => {
  test("Add College Details", async ({ page }) => {
    await validateUser(page);
    await addCollege(page);
  });
});
