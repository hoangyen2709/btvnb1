import { test } from '@playwright/test';

test('Test1', async ({ page }) => {

    await test.step('Step 1: go to website', async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    });
    await test.step('Step 2: fill required fields', async () => {
        await page.locator("//input[@id='username']").fill("Hoang Yen");
        await page.locator("//input[@id='email']").fill("hoangyen@gmail.com");
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.selectOption("//select[@id='country']", 'usa')
    });
    await test.step('Step 3 Register: click', async () => {
        await page.locator("//button[@type='submit']").click()
    });
});