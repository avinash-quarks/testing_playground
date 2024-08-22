import { test, expect } from '../../Pages/Abstract_Component/my-test';

test('Validate Ajax Requests', async({ajaxPage,page})=>{

    await ajaxPage.navigateToPage();
    await ajaxPage.sendRequest();
    const response= await ajaxPage.getResponse();
    expect(response).toContain('Data loaded with AJAX get request.');

})