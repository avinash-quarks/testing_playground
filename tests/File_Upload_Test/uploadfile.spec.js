import { test, expect } from '../../Pages/Abstract_Component/my-test';

test('Upload File Using Drag & Drop Method', async({fileuploadPage,page})=>{

    await fileuploadPage.navigateToPage();
    await fileuploadPage.selectFile();

})  