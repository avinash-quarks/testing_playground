export class ScrollBar {

    constructor(page) {
        this.page = page;
        this.hiddenBtn = page.locator('#hidingButton')
    }

    async naviagteToPage(){

        await this.page.goto("/scrollbars");
    }

    async clickButton() {
        // await this.page.evaluate(() => {
        //   document.querySelector('#hidingButton').scrollIntoView();
        // });
        await this.hiddenBtn.click();
    }


}