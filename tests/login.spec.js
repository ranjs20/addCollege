import {test} from "@playwright/test"
import { validateUser } from "../pages/loginPage"

test.describe("Login",()=>{
   test("Validate User",async({page})=>{
    await validateUser(page);
   })
})