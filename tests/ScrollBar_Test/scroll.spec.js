import { test, expect } from '../../Pages/Abstract_Component/my-test';

test('Find Hidden Button', async({scrollbarPage,page})=>{

    await scrollbarPage.naviagteToPage();
    await scrollbarPage.clickButton();
    await page.pause();
})  