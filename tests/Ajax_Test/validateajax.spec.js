import { test, expect } from '../../Utils/my-test';

test('Validate Ajax Requests', async({ajaxPage,page})=>{

    await ajaxPage.navigateToPage();
    await ajaxPage.sendRequest();
    const response= await ajaxPage.getResponse();
    expect(response).toContain('Data loaded with AJAX get request.');

})