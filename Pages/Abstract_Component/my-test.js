const base = require('@playwright/test');
const { AjaxData } = require('../Ajax_Data/AjaxData');
const { LoadDelay } = require('../Page_Load/LoadDelay');
const { Progress } = require('../Progress_Bar/Progress');
const { OverlapElement } = require('../Overlapped_Element/OverLapElement');
const { Button } = require('../Button/Button');
const { ScrollBar } = require('../ScrollBar/ScrollBar');
const { DynamicTable } = require('../Dynamic_Table/DynamicTable');
const { Visibility } = require('../Visibility/Visibility');
const { FileUpload } = require('../FileUpload/FileUpload');


// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
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