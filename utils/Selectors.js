export const LoginSelectors = {
  email: "#email",
  password: "#password",
  loginButton: 'button[type="submit"]',
  emailError: "p.text-error-dark",
};
export const InstitutionSelectors = {
  institutionLink: 'a[href="/admin/institutions"]',
  addInstitutionBtn: 'button:has-text("Add Institution")',
  addCollegeBtn: 'li:has-text("Add College")',
};
export const BasicInfoSelectors = {
  logo: 'input[name="logo"]',
  name: "#name",
  domainName: "#domain",
  accessTypeDropdown: 'div.css-1d8n9bt:has-text("Select Access Type")',
  optionLocal: 'div[class*="-option"]:has-text("Local")',
};
export const ContactInfoSelectors = {
  address: "#address",
  email: "#email",
  website: "#website",
  number: "#phone_no",
};
export const AdminInfoSelectors = {
  name: 'input[name="admins.0.full_name"]',
  email: 'input[name="admins.0.email"]',
  number: 'input[name="admins.0.phone_no"]',
  designation: 'input[name="admins.0.designation"]',
};
export const TagSelectors = {
  management: 'span:has-text("+2 Management")',
  administration: 'span:has-text("Administration")',
  adobe: 'span:text-is("Adobe")',
};
export const CreateSelectors = {
  createCollegeBtn: 'button[type="submit"]:has-text("Create new College")',
};
