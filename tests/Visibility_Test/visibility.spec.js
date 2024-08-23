import { test } from '../../Utils/my-test';

test('Validate visibility of hidden button', async({visibilityPage,page})=>{

    await visibilityPage.navigateToPage();
    await visibilityPage.hideAllButton();
    await visibilityPage.validateHiddenButton();
   
})  