import { expect } from "@playwright/test";
import * as utils from "../utils/actionUtils";
import { LoginSelectors } from "../utils/Selectors";

async function performLogin(page, email, password) {
  await expect(page.locator("#email")).toBeVisible();
  await page.fill(LoginSelectors.email, email);
  await utils.fills(page, LoginSelectors.password, password);
  await utils.click(page, LoginSelectors.loginButton);
}
export async function validateUser(page, email, password) {
  await performLogin(page, email, password);
  await page.waitForTimeout(10000);
  await expect(page).toHaveURL(/dashboard/);
}
