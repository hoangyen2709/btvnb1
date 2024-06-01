import { test } from '@playwright/test';

test('Test2', async ({ page }) => {

    await test.step('Step 1: go to website', async () => {
        await page.goto("https://material.playwrightvn.com");
    });
    await test.step('Step 2: go to Product page', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });
    await test.step('Step 3: select 2 product 1', async () => {
        for (let i = 0; i < 2; i++) {
            await page.locator("(//button[@class='add-to-cart'])[1]").click();
        }
    });
    await test.step('Step 4: select 3 product 2', async () => {
        for (let i = 0; i < 3; i++) {
            await page.locator("(//button[@class='add-to-cart'])[2]").click();
        }
    });
    await test.step('Step 5: select 1 product 3', async () => {
            await page.locator("(//button[@class='add-to-cart'])[3]").click();
    });
});