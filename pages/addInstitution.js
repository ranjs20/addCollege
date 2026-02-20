import * as selector from "../utils/Selectors";
export async function navigateToAddCollege(page) {
  await Click(page, selector.InstitutionSelectors.institutionLink);
  await Click(page, selector.InstitutionSelectors.addInstitutionBtn);
  await Click(page, selector.InstitutionSelectors.addCollegeBtn);
}
async function Fill(page, sel, value) {
  const element = page.locator(sel);
  await element.waitFor({ state: "visible", timeout: 5000 });
  await element.scrollIntoViewIfNeeded();
  await element.fill(value);
}

async function Click(page, sel) {
  const element = page.locator(sel);
  await element.waitFor({ state: "visible", timeout: 10000 });
  await element.scrollIntoViewIfNeeded();
  await element.click();
}

export async function uploadLogo(page, filePath) {
  const element = page.locator(selector.BasicInfoSelectors.logo);
  await element.scrollIntoViewIfNeeded();
  await element.setInputFiles(filePath);
}

export async function fillBasicInfo(page, basicData) {
  await Fill(page, selector.BasicInfoSelectors.name, basicData.name);
  await Fill(
    page,
    selector.BasicInfoSelectors.domainName,
    basicData.domainName
  );
  await Click(page, selector.BasicInfoSelectors.accessTypeDropdown);
  await Click(page, selector.BasicInfoSelectors.optionLocal);
}

export async function fillContactInfo(page, contactData) {
  await Fill(page, selector.ContactInfoSelectors.address, contactData.address);
  await Fill(page, selector.ContactInfoSelectors.email, contactData.email);
  await Fill(page, selector.ContactInfoSelectors.website, contactData.website);
  await Fill(page, selector.ContactInfoSelectors.number, contactData.number);
}

export async function fillAdminInfo(page, adminData) {
  await Fill(page, selector.AdminInfoSelectors.name, adminData.name);
  await Fill(page, selector.AdminInfoSelectors.email, adminData.email);
  await Fill(page, selector.AdminInfoSelectors.number, adminData.number);
  await Fill(
    page,
    selector.AdminInfoSelectors.designation,
    adminData.designation
  );
}

export async function selectTags(page) {
  await Click(page, selector.TagSelectors.administration);
  await Click(page, selector.TagSelectors.adobe);
  await Click(page, selector.TagSelectors.management);
}

export async function submitCollegeForm(page) {
  const btn = page.locator(selector.CreateSelectors.createCollegeBtn);
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
  await btn.click();
}
