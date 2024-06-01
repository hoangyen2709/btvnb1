import { test } from '@playwright/test';

test('Test4', async ({ page }) => {

    await test.step('Step 1: go to website', async () => {
        await page.goto("https://material.playwrightvn.com");
    });
    await test.step('Step 2: go to Personal notes page', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });
    await test.step('Step 3: add 10 notes', async () => {
        let notes = [
            {title: 'Motor bay tốc độ 229 km/h', content: 'Mẫu motor bay điện cất hạ cánh thẳng đứng 2 chỗ ngồi của UDX có thể tăng tốc tới gần 100 km/h chỉ trong 3 giây.'},
            {title: 'Mực bạch tuộc tấn công camera dưới biển sâu', content: 'content 2'},
            {title: 'Tàu thăm dò sao Kim duy nhất của nhân loại mất liên lạc', content: 'content 3'},
            {title: 'Công ty Australia đông lạnh người đầu tiên để chờ hồi sinh', content: 'content 4'},
            {title: 'Tàu dùng nhiên liệu sạch khiến Trái Đất ấm lên', content: 'content 5'},
            {title: 'Hồng hạc 70 tuổi lần đầu đẻ trứng khi tìm được bạn tình', content: 'content 6'},
            {title: 'TP HCM đặt hàng nghiên cứu khung bệnh án điện tử dùng chung', content: 'content 7'},
            {title: 'title 8', content: 'content 8'},
            {title: 'title 9', content: 'content 9'},
            {title: 'title 10', content: 'content 10'}
        ];
    
        for (let note of notes) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.locator("//button[@id='add-note']").click();
        }
        async function searchNoteByTitle(page, title) {
            await page.locator("//input[@id='search']").fill(title);
        
            const note = await page.locator(`//li[span[text()='${title}']]`);
            if (await note.count() > 0) {
                console.log(`Note with title "${title}" found.`);
            } else {
                console.log(`Note with title "${title}" not found.`);
            }
        }
        
        await searchNoteByTitle(page, 'Motor bay tốc độ 229 km/h');
        await page.locator("//div[@id='note-count' and text()='Total Notes:1']").hover();

    });

})