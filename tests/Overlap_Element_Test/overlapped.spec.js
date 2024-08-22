import { test, expect } from '../../Pages/Abstract_Component/my-test';

test('Input Text in Overlapped Element', async({overlapElementPage,page})=>{

    await overlapElementPage.navigateToPage();
    await overlapElementPage.enterName();
})