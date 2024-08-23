import { test, expect } from '../../Utils/my-test';

test('Find Hidden Button', async({scrollbarPage,page})=>{

    await scrollbarPage.naviagteToPage();
    await scrollbarPage.clickButton();
    await page.pause();
})  