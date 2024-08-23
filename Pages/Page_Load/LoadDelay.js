export class LoadDelay {
    constructor(page) {
        this.page = page;
        this.loaddelayLink = page.locator("a[href='/loaddelay']")
        this.delayBtn = page.locator("button[class='btn btn-primary']");
        this.visibilitytrigger = page.locator("#visibility_trigger");
        this.visibilitytarget = page.locator("#visibility_target");
        this.visibilitytext = page.locator(".popover-body");
        this.invisibilitytrigger = page.locator("#invisibility_trigger");
        this.invisibilitytarget = page.locator("#invisibility_target");
        this.spinnergone = page.locator("#spinner_gone");
        this.enabledtrigger = page.locator("#enabled_trigger");
        this.enabledtarget = page.locator("#enabled_target");
        this.enabledtext = page.locator(".popover-header");
    }

    async navigateToPage() {
        await this.page.goto("/home");
    }

    async clickLoadDelayLink() {
        await this.loaddelayLink.click();
    }

    async clickDelayBtn() {
        await this.delayBtn.click();
    }

    async navigateToWaitConditionPage() {
        await this.page.setBaseUrl('automationcamp', "/expected_conditions.html");
    }

    async clickToVisibelBtn() {
        await this.visibilitytrigger.click();
    }

    async waitForVisibleBtn() {
        await this.visibilitytarget.waitFor({ state: 'visible' });
        return true;
    }

    async validateVisibleBtnText() {
        await this.visibilitytarget.click();
        const Visibletext = await this.visibilitytext.textContent();
        console.log(Visibletext);
        return Visibletext;
    }

    async clickToStopSpinner() {
        await this.invisibilitytrigger.click();
    }

    async waitForStopSpinner() {
        await this.invisibilitytarget.waitFor({ state: 'hidden' });
        return true;
    }

    async validateSpinnerVisibility() {
        const spinnerGone = await this.spinnergone.textContent();
        console.log(spinnerGone);
        return spinnerGone;
    }

    async clickToEnableBtn() {
        await this.enabledtrigger.click();
    }

    async waitForEnableBtn() {
        await this.page.waitForSelector('span.mr-2', { state: 'hidden' });
        const enabled = await this.enabledtarget.isEnabled();
        return enabled;
    }

    async validateEnabledBtnText() {
        await this.enabledtarget.click();
        const enabledText = await this.enabledtext.textContent();
        console.log(enabledText);
        return enabledText;
    }

}