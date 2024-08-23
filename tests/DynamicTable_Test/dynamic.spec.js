import { test, expect } from '../../Utils/my-test';

test('Extract Value from the dynamic table', async({dynamictablePage,page})=>{

    await dynamictablePage.navigateToPage();
    const chromeUsage = await dynamictablePage.getCPUUsage();
    console.log(chromeUsage);
    const ActualUsage = await dynamictablePage.getActualCPUUsage();
    console.log(ActualUsage);
    expect(chromeUsage).toEqual(ActualUsage);
})  