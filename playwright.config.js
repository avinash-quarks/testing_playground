// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    // ['list'],
    // ['allure-playwright']
  ],

  use: {

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    colorScheme: 'dark',
    screenshot: 'on',
    video: 'on-first-retry',
    permissions: ['geolocation'],
    geolocation: { longitude: 12.492507, latitude: 41.889938 },
    viewport: { width: 1920, height: 1440 },

    // Set a default base URL
    baseURL: 'https://dev.guniguru.com',

    //launchOptions: { slowMo: 2000 },
  },



  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.js/
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      expect: { timeout: 10 * 1000 },
      timeout: 10 * 30000,
      dependencies: ['setup'],

    },
    {
      name: 'chromiumnew',
      use: {
        ...devices['Desktop Chrome'],
        // trace:"on",
        // headless: true,
        viewport: { width: 1920, height: 1440 },
      },
      expect: { timeout: 10 * 1000 },
      timeout: 10 * 30000,
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        // trace:"on",
        // headless: true,
        viewport: { width: 1920, height: 1440 },
      },
      expect: { timeout: 10 * 1000 },
      timeout: 10 * 30000,
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        // trace:"on",
        // headless: true,
        viewport: { width: 1920, height: 1440 },
      },
      expect: { timeout: 10 * 1000 },
      timeout: 10 * 30000,
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'MobileChrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

