import { test, expect } from '../../Utils/my-test';

test('Input Text in Overlapped Element', async({overlapElementPage,page})=>{

    await overlapElementPage.navigateToPage();
    await overlapElementPage.enterName();
})