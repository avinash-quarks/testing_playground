import { test, expect } from '../../Utils/my-test';

test('Wait for page loaded', async({loadDelay,page})=>{

    await loadDelay.navigateToPage();
    await loadDelay.clickLoadDelayLink();
    await loadDelay.clickDelayBtn();
    await page.pause();

})