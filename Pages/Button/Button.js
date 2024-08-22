export class Button {
    constructor(page) {
        this.page = page;
        this.newbuttonName = page.locator("#newButtonName");
        this.updatingButtonName = page.locator("#updatingButton");
    }   

    async navigateToPage() {
        await this.page.goto("/textinput");
    }

    async enterNewButtonName(newName) {
        await this.newbuttonName.fill(newName);
    }

    async clickUpdateButton() {
        await this.updatingButtonName.click();
        const newButtonName = await this.updatingButtonName.textContent();
        return newButtonName;
    }

}
