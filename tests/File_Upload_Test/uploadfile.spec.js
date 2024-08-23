import { test, expect } from '../../Utils/my-test';

test('Upload File Using Drag & Drop Method', async({fileuploadPage,page})=>{

    await fileuploadPage.navigateToPage();
    await fileuploadPage.selectFile();

})  