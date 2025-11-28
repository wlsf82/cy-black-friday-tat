const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  e2e: {
    fixturesFolder: false,
    supportFile: false,
  },
})
