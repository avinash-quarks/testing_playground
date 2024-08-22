export class OverlapElement {
    constructor(page) {
        this.page = page;
        this.name = page.locator("#name");
    }

    async navigateToPage() {
        await this.page.goto("/overlapped");
    }

    async enterName() {
        await this.page.evaluate(() => {
          document.querySelector('#name').scrollIntoView();
        });
        await this.name.fill("John Doe");
    }

}
