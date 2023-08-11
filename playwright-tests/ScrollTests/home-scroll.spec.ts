import {test, expect} from "@playwright/test";

const StartingLocations = [
    "Footer",
    "Degrees",
    "Experiences",
    "Projects"
]

test.describe('Varying location scroll',()=>{
    StartingLocations.forEach(location=>{
        test(`Scroll from ${location}`, async({page})=>{
            await page.goto("./")
            expect(page).toHaveTitle("John Leidy II")
        })
    })
})