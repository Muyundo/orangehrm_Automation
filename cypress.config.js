const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "y4wd1o",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
