const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jit7gn",
  reporter: "mochawesome",
  reporterOptions: {
    reportFilename: "[name]-report",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1440,
    baseUrl: "https://www.google.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
