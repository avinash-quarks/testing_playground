import { test, expect } from '../../Pages/Abstract_Component/my-test';

test('Validate Button Name is Updating or not', async({buttonPage,page})=>{

    const newButtonName = 'New Button'
    await buttonPage.navigateToPage();
    await buttonPage.enterNewButtonName(newButtonName);
    expect(await buttonPage.clickUpdateButton()).toEqual(newButtonName);
    await page.pause();
})  