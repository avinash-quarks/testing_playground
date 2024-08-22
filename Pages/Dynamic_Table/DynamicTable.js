export class DynamicTable {

    constructor(page) {

        this.page = page;
        this.headers = page.locator("span[role='columnheader']");
        this.rows = page.locator("div[role='row']");
        this.actualUsage = page.locator(".bg-warning");
    }

    async navigateToPage() {
        await this.page.goto("/dynamictable");
    }

    async findCPUColumn() {
        const headerCount = await this.headers.count();
        for (let i = 0; i < headerCount; i++) {
            const headerText = await this.headers.nth(i).textContent();
            if (headerText.trim() === "CPU") {
                return i; // Return the index as soon as the "CPU" header is found
            }
        }
        throw new Error('CPU column not found'); // Handle case where "CPU" header is not found
    }
    
    async getCPUUsage() {
        const cpuColumnIndex = await this.findCPUColumn();
    
        const rowCount = await this.rows.count();
        for (let i = 0; i < rowCount; i++) {
            const rowText = await this.rows.nth(i).locator('span:nth-child(1)').textContent();
            if (rowText.includes("Chrome")) {
                const chromeUsage = await this.rows.nth(i).locator(`span:nth-child(${cpuColumnIndex + 1})`).textContent();
                return chromeUsage;
            }
        }
        throw new Error('Chrome row not found'); // Handle case where "Chrome" row is not found
    }

    async getActualCPUUsage() {

        const UsageString = await this.actualUsage.textContent();
        const ActualUsage = UsageString.split(": ")[1];
        return ActualUsage;
    }
}