import { test } from "@playwright/test";
import { validateUser } from "../pages/loginPage";
import { gotoPage } from "../utils/actionUtils";

test.describe("Login", () => {
  test("Validate User", async ({ page }) => {
    await gotoPage(page);
    await validateUser(page, process.env.EMAIL, process.env.PASSWORD);
  });
});
