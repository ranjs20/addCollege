import { test } from "@playwright/test";
import { validateUser } from "../pages/loginPage";

test.describe("Login", () => {
  test("Validate User", async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await validateUser(page, process.env.EMAIL, process.env.PASSWORD);
  });
});
