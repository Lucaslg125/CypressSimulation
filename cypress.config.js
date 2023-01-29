const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "viewportWidth":1440,
    "viewportHeight":900,
    
    baseUrl: 'https://core.homolog.bancorcibrasil.com.br/login?returnUrl=%2F%2F',

    "chromeWebSecurity": false

    
    }
  })
