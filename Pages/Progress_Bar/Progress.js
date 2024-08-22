export class Progress {

    constructor(page){

        this.page = page;
        this.startbtn = page.locator("#startButton");
        this.stopbtn = page.locator("#stopButton");
        this.progressValue = page.locator("#progressBar");
    }

    async navigateToPage(){

        await this.page.goto("/progressbar");
    }

    async startProgress(){
        await this.startbtn.click();
    }
    
    async stopProgressat75(){
        let flag = false;
        while(!flag){
            const progress = await this.progressValue.getAttribute('aria-valuenow');
            if(progress >= '75'){
                flag = true;
            }
        }
        await this.stopbtn.click();
    }

}