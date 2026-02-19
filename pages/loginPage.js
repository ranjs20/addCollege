import { expect } from "@playwright/test";
import * as utils from "../utils/actionUtils";
import { LoginData } from "../utils/testData";
import { LoginSelectors } from "../utils/Selectors";

async function performLogin(page, email, password) {
  await utils.gotoPage(page);
  await expect(page.locator("#email")).toBeVisible()
  await page.fill( LoginSelectors.email, LoginData.email);
  await utils.fills(page, LoginSelectors.password, LoginData.password);
  await utils.click(page, LoginSelectors.loginButton);
}
export async function validateUser(page) {
  await performLogin(page, LoginData.email, LoginData.password);
  await expect(page).toHaveURL(/dashboard/);
}
