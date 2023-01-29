import './commands'

require ('cypress-xpath')

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    whitelist: (xhr) => {
      // handle custom logic for whitelisting
      return true;
    }
  })