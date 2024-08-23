import { test, expect } from '../../Utils/my-test';

test('Validate the slider Progress', async({progressPage,page})=>{

    await progressPage.navigateToPage();
    await progressPage.startProgress();
    await progressPage.stopProgressat75();
    await page.pause();

})