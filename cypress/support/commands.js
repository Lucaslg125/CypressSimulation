
const el = require('../support/elements').ELEMENTS;

Cypress.Commands.add('Login', (user, passwd)=> {
    
    cy.visit('/')
    cy.get(el.LOGIN.USER, { timeout: 8000 }).type('905.789.890-00', { delay: 10 })
        .should('have.value', '905.789.890-00')
    cy.get(el.LOGIN.SENHA, { timeout: 8000 }).type('Blade123@', { delay: 10 }).should('have.value', 'Blade123@')
    cy.get(el.LOGIN.BTN_LOGIN).click()


})


Cypress.Commands.add('MenuSimulacao', menuSimulacao => {
    
    cy.get(el.MENU.ICONETL, { timeout: 8000 }).trigger('mouseover').click({ force: true })
    cy.get(el.MENU.NOVA_SIMULACAO, { timeout: 8000 }).trigger('mouseover').click({ force: true })

})


Cypress.Commands.add('SelecionarVendedor', selecionarVendedor => {
   
    cy.get(el.VENDEDOR.TABELA_VENDEDOR, { timeout: 80000 }).trigger('mouseover').click()
    cy.get(el.VENDEDOR.CELULA_VENDEDOR, { timeout: 80000 }).trigger('mousedown').click({ force: true })
    cy.get(el.VENDEDOR.SELECIONAR_VENDEDOR, { timeout: 80000 }).click({ force: true })
    cy.get(el.VENDEDOR.NOME_VENDEDOR).contains('Aline Ribeiro Lopes').click({ force: true })
    cy.get(el.VENDEDOR.SELECIONAR_VENDEDOR).should('contain', 'Aline Ribeiro Lopes')

})

