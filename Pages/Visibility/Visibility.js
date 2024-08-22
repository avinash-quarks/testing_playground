import { expect } from '@playwright/test';

export class Visibility {
    constructor(page) {
        this.page = page;
        this.hideBtn = page.locator("#hideButton");
        this.transparent = page.locator("#transparentButton");
        this.removedButton = page.locator("#removedButton");
        this.invisibleButton = page.locator("#invisibleButton");
        this.zeroWidthButton = page.locator("#zeroWidthButton");
        this.notdisplayedButton = page.locator("#notdisplayedButton");
        this.overlappedButton = page.locator("#overlappedButton");
        this.offscreenButton = page.locator("#offscreenButton");
    }

    async navigateToPage() {
        await this.page.goto("/visibility");
    }

    async hideAllButton() {
        await this.hideBtn.click();
    }

    async validateHiddenButton() {
        // Case 1: Removed element
        await expect.soft(this.removedButton).toBeHidden();

        // Case 2: Zero height or width
        const zeroWidthRect = await this.zeroWidthButton.boundingBox();
        expect.soft(zeroWidthRect.width === 0 || zeroWidthRect.height === 0).toBeTruthy();

        // Case 3: Covered by another element
        const isOverlapped = await this.overlappedButton.evaluate((el) => {
            const rect = el.getBoundingClientRect();
            const elementAtPoint = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
            return elementAtPoint !== el && !el.contains(elementAtPoint);
        });
        expect.soft(isOverlapped).toBeTruthy();

        // Case 4: Hidden using styles
        // Opacity: 0
        const opacityValue = await this.transparent.evaluate(el => window.getComputedStyle(el).opacity);
        expect.soft(opacityValue).toBe('0');

        // Visibility: hidden
        const visibilityValue = await this.invisibleButton.evaluate(el => window.getComputedStyle(el).visibility);
        expect.soft(visibilityValue).toBe('hidden');

        // Display: none
        const displayValue = await this.notdisplayedButton.evaluate(el => window.getComputedStyle(el).display);
        expect.soft(displayValue).toBe('none');

        // Moved offscreen
        const isOffscreen = await this.offscreenButton.evaluate((el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.left + rect.width <= 0 ||
                rect.top + rect.height <= 0 ||
                rect.left >= window.innerWidth ||
                rect.top >= window.innerHeight
            );
        });
        expect.soft(isOffscreen).toBeTruthy();
    }
}