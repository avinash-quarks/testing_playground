export class AjaxData {
    constructor(page) {
        this.page = page;
        this.ajaxRequest = page.locator('#ajaxButton');
        this.getText = page.locator('#content p');
    }

    async navigateToPage() {
        await this.page.goto("/ajax");
    }

    async sendRequest() {
        await this.ajaxRequest.click();
    }

    async getResponse() {
        return await this.getText.textContent();
    }

}
