import {test, expect} from "@playwright/test";

const StartingLocations = [
    "Footer"
]

test.describe('Varying location scroll',()=>{
    test('From ', async ({page}) =>{
        await page.goto("./")
        expect(page).toHaveTitle("John Leidy II")
    })
})