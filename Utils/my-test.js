const base = require('@playwright/test');
const { AjaxData } = require('../Pages/Ajax_Data/AjaxData');
const { LoadDelay } = require('../Pages/Page_Load/LoadDelay');
const { Progress } = require('../Pages/Progress_Bar/Progress');
const { OverlapElement } = require('../Pages/Overlapped_Element/OverLapElement');
const { Button } = require('../Pages/Button/Button');
const { ScrollBar } = require('../Pages/ScrollBar/ScrollBar');
const { DynamicTable } = require('../Pages/Dynamic_Table/DynamicTable');
const { Visibility } = require('../Pages/Visibility/Visibility');
const { FileUpload } = require('../Pages/FileUpload/FileUpload');


const baseUrlsFixture = {
  baseUrls: async ({}, use) => {
    await use({
      playground: 'http://uitestingplayground.com',
      automationcamp: 'https://play1.automationcamp.ir',
      // Add more as needed
    });
  },
};

exports.test = base.test.extend({
  ...baseUrlsFixture,
  page: async ({ page, baseUrls }, use) => {
    // Add a method to navigate using a specific base URL
    page.setBaseUrl = async (urlKey, path) => {
      if (baseUrls[urlKey]) {
        await page.goto(`${baseUrls[urlKey]}${path}`);
      } else {
        throw new Error(`Base URL for '${urlKey}' not found`);
      }
    };
    await use(page);
  },
  
  ajaxPage: async ({ page }, use) => {

    const ajaxPage = new AjaxData(page);
    await use(ajaxPage);
  },

  loadDelay: async ({ page }, use) => {
    
    const loadDelay = new LoadDelay(page);
    await use(loadDelay);
  },

  progressPage: async ({ page }, use) => {
    
    const progress = new Progress(page);
    await use(progress);
  },

  overlapElementPage: async ({ page }, use) => {
    
    const overlapElementPage = new OverlapElement(page);
    await use(overlapElementPage);
  },

  buttonPage: async ({ page }, use) => {
    
    const buttonPage = new Button(page);
    await use(buttonPage);
  },

  scrollbarPage: async ({ page }, use) => {
    
    const scrollbarPage = new ScrollBar(page);
    await use(scrollbarPage);
  },

  dynamictablePage: async ({ page }, use) => {
    
    const dynamictablePage = new DynamicTable(page);
    await use(dynamictablePage);
  },

  visibilityPage: async ({ page }, use) => {
    
    const visibilityPage = new Visibility(page);
    await use(visibilityPage);
  },

  fileuploadPage: async ({ page }, use) => {
    
    const fileuploadPage = new FileUpload(page);
    await use(fileuploadPage);
  },
});
exports.expect = base.expect;