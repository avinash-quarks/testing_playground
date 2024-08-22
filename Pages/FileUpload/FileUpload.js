const path = require('path');
export class FileUpload {

    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.goto("/upload");
    }

    async selectFile() {

        // Get the drop zone element
        const dropZone = await this.page.frameLocator("iframe[src='/static/upload.html']").locator('.upload-info');

        // Path to the file in the project directory
        const filePath = path.join(process.cwd(), 'QA.docx');

        // Simulate file drop
        await dropZone.evaluateHandle((element, fileName) => {
            const dataTransfer = new DataTransfer();

            // Create a File object with the correct name and MIME type
            dataTransfer.items.add(new File([''], fileName, { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));

            const event = new DragEvent('drop', {
                bubbles: true,
                cancelable: true,
                dataTransfer: dataTransfer
            });

            element.dispatchEvent(event);
        }, path.basename(filePath));

        console.log('File dropped and uploaded successfully');
    }
}