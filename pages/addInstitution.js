import * as utils from "../utils/actionUtils";
import * as selector from "../utils/Selectors";
import * as data from "../utils/testData";

async function basicInfo(page) {
  await page.setInputFiles(selector.BasicInfoSelectors.logo, "logoPhoto.jpg");
  await utils.fills(
    page,
    selector.BasicInfoSelectors.name,
    data.BasicInfo.name
  );
  await utils.fills(
    page,
    selector.BasicInfoSelectors.domainName,
    data.BasicInfo.domainName
  );
  await utils.click(page, selector.BasicInfoSelectors.accessTypeDropdown);
  await utils.click(page, selector.BasicInfoSelectors.optionLocal);
}
async function contactInfo(page) {
  await utils.fills(
    page,
    selector.ContactInfoSelectors.address,
    data.ContactInfo.address
  );
  await utils.fills(
    page,
    selector.ContactInfoSelectors.email,
    data.ContactInfo.email
  );
  await utils.fills(
    page,
    selector.ContactInfoSelectors.website,
    data.ContactInfo.website
  );
  await utils.fills(
    page,
    selector.ContactInfoSelectors.number,
    data.ContactInfo.number
  );
}
async function adminInfo(page) {
  await utils.fills(
    page,
    selector.AdminInfoSelectors.name,
    data.adminInfo.name
  ),
    await utils.fills(
      page,
      selector.AdminInfoSelectors.email,
      data.adminInfo.email
    ),
    await utils.fills(
      page,
      selector.AdminInfoSelectors.number,
      data.adminInfo.number
    ),
    await utils.fills(
      page,
      selector.AdminInfoSelectors.designation,
      data.adminInfo.designation
    );
}
async function tags(page) {
  await utils.click(page, selector.TagSelectors.administration);
  await utils.click(page, selector.TagSelectors.adobe);
  await utils.click(page, selector.TagSelectors.management);
}

export async function addCollege(page) {
  await gotoAddCollege(page);
  await basicInfo(page);
  await contactInfo(page);
  await adminInfo(page);
  await tags(page);
  await utils.click(page, selector.CreateSelectors.createCollegeBtn);
  await utils.click(page, selector.CreateSelectors.createCollegeBtn);
}
async function gotoAddCollege(page) {
  await utils.click(page, selector.InstitutionSelectors.institutionLink);
  await utils.click(page, selector.InstitutionSelectors.addInstitutionBtn);
  await utils.click(page, selector.InstitutionSelectors.addCollegeBtn);
}
