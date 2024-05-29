const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 414,
  viewportHeight: 896,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});