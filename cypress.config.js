const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  watchForFileChanges: false,
  requestTimeout : 100000,
  responseTimeout : 100000,
  pageLoadTimeout: 100000,
  env:{
    baseUrl: 'https://www.hostinger.com/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
