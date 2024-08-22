export class LoadDelay {
    constructor(page) {
        this.page = page;
        this.loaddelayLink = page.locator("a[href='/loaddelay']")
        this.delayBtn = page.locator("button[class='btn btn-primary']");
    }

    async navigateToPage() {
        await this.page.goto("/home");
    }

    async clickLoadDelayLink(){
        await this.loaddelayLink.click();
    }

    async clickDelayBtn(){
        await this.delayBtn.click();
    }
}