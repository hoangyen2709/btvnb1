import { test } from '@playwright/test';

test('Test3', async ({ page }) => {

    await test.step('Step 1: go to website', async () => {
        await page.goto("https://material.playwrightvn.com");
    });
    await test.step('Step 2: go to Todo page', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });
    await test.step('Step 3: add 100 todo items', async () => {
        for (let i = 1; i <= 100; i++) {
            let todoContent = `Todo ${i}`;
            await page.locator("//input[@id='new-task']").fill(todoContent);
            await page.locator("//button[@id='add-task']").click();
        }
    });
    await test.step('Step 4: delete odd todo items', async () => {
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                page.once('dialog', async dialog => await dialog.accept());
                await page.locator(`//li[span[text()='Todo ${i}']]//button[contains(text(), 'Delete')]`).click();
            }
        }
    })
});