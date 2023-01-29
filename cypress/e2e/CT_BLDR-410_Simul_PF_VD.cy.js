///<reference  types="cypress"/>
import 'cypress-xpath';
import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR';

it('CT Simulação Veiculo Usado Com 2 Avalistas', () => {

  const el = require('../support/elements').ELEMENTS;

  const firstaName = faker.name.firstName('male')
  const lastName = faker.name.lastName()
  const email = faker.internet.email()
  const randomcpf = require('gerador-validador-cpf')
  const phoneNumber = faker.phone.phoneNumber();

  cy.Login()
  cy.wait(3000)
  cy.MenuSimulacao()
  cy.SelecionarVendedor()

  cy.get(el.MENU.BTN_SIMULACAO)
    .trigger('mouseover').click()

  cy.get(el.CLIENTE.CAMPO_CPF).should('to.visible').type(randomcpf.generate())

  cy.get(el.CLIENTE.CAMPO_NOME).type(`${firstaName} ${lastName}`).should('have.value', `${firstaName} ${lastName}`)

  cy.get(el.CLIENTE.DTNASCIMENTO).type('01/05/1993').type('{Esc}')

  cy.get(el.CLIENTE.CAMPO_TEL).should('to.visible').type('21997250105')

  cy.get(el.CLIENTE.CAMPO_EMAIL).clear()
  cy.get(el.CLIENTE.CAMPO_EMAIL).type(email)

  cy.get(el.CLIENTE.CAMPO_CEP).type('70713000{enter}')
  

  cy.wait(3000)

  cy.get(el.CLIENTE.BTN_CONTINUAR)
    .click()
  //  cy.wait(3000)
  cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content', { timeout: 80000 }).click({ force: true })
  cy.get(el.VEICULO.IMG_CAR_KIWD, { timeout: 80000 }).click({ force: true })
  //  cy.wait(3000)

  cy.get(el.VEICULO.RDIO_VERSAO_VEICULO, { timeout: 80000 }).click({ force: true })

  cy.get(el.VEICULO.BTN_SIMULARVEICULO, { timeout: 80000 }).click()

  cy.wait(2000)

 //Consentimento para Simulaçao
 cy.get(el.SIMULACAO.MENSG_CONSENTIMENTO_SIMUL, { timeout: 80000 }).should('be.visible').trigger('mouseover').click({ force: true })
 cy.get(el.SIMULACAO.CHECB_SIMUL_FINACIAMENTO, { timeout: 80000 }).should('be.visible').trigger('mouseover').click({ force: true })
 cy.get(el.SIMULACAO.BTN_CONTINUAR_SIMUL_FINACIAMENTO).contains('Continuar').click({ force: true })
  cy.wait(2000)
  
  
  cy.get('input[class="value-bold input-no-padding ng-untouched ng-pristine ng-valid"]', { timeout: 80000 }).first().clear()
    .type('45.067,61')
    .type('{enter}')

  cy.wait(5000)
  cy.contains(el.SIMULACAO.CARD_SIMU_1_LNK_CONTRATARSER, { timeout: 70000 }).first().click()

  cy.xpath(el.SIMULACAO.MENSG_CONSENTIMENTO_SIMUL, { timeout: 80000 }).should('be.visible').trigger('mouseover').click({ force: true })
  cy.get(el.SIMULACAO.CHECB_SIMUL_FINACIAMENTO, { timeout: 80000 }).should('be.visible').trigger('mouseover').click({ force: true })
  cy.get(el.SIMULACAO.BTN_CONTINUAR_SIMUL_FINACIAMENTO).contains('Continuar').click({ force: true })


  cy.get('[data-testid="summary-tab_button-continue"]').first().click({ force: true })

  //dados Pessoais
  cy.get(el.FICHA_CLIENTE.DADOS_PESSOAIS, { timeout: 80000 })
    .click({ force: true })

  //Telefone Dados Pessoais
  cy.get(el.FICHA_CLIENTE.DP_TELEFONEC).type('(61) 992685018')
  cy.get(el.FICHA_CLIENTE.RDO_FEMININO).click()

  //combo Estado civil
  cy.get(el.FICHA_CLIENTE.ESTADO_CIVIL).click()
  cy.get('.mat-option-text').contains('CASADO', { timeout: 80000 }).click({ force: true })
  //Nome do Conjuguê
  cy.get(el.FICHA_CLIENTE.DP_CAMPO_CONJUGUE).type('Livia Matos Texeira',)

  // CPFouCNPJ do Conjuguê
  cy.get(el.FICHA_CLIENTE.DP_CPFCONJUGUE)
    .type('49313921057')

  //Combo Nacionalidade
  cy.get(el.FICHA_CLIENTE.DP_COMBONACIO, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains('Brasil', { timeout: 80000 }).click({ force: true })

  //ComboUF
  cy.get(el.FICHA_CLIENTE.DP_COMBOUF, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains(' ALAGOAS ', { timeout: 80000 }).click({ force: true })

  cy.wait(1000)
  cy.get('[data-testid="naturalness"] > .mat-select-trigger > .mat-select-value', { timeout: 70000 }).click({ force: true })
  cy.get('.mat-option-text').contains('ATALAIA', { timeout: 80000 }).click({ force: true })

  cy.wait(1000)
  //cy.reload()

  //Documentos
  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.DOCUMENTOS, { timeout: 70000 }).click({ force: true })
  cy.wait(3000)

  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.DP_DOCUMENTOS_RG, { timeout: 70000 }).click()
  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.NRG, { timeout: 70000 })//rg
    .click({ force: true })
    .type('2832346')

  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.COMBOPAISDOC)
    .click({ force: true })// pais do documento
  cy.get('.mat-option-text').contains('Brasil', { timeout: 80000 }).click({ force: true })

  cy.wait(1000)

  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.UF_DOC, { timeout: 70000 })
    .click()// uf  do documento
  cy.get('.mat-option-text').contains('DISTRITO FEDERAL', { timeout: 80000 }).click({ force: true })
    .click({ force: true }) //Amazonas

  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.DTEMISSAO)//data emissão
    .type('16/09/2000')
    .type('{Esc}')

  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.ORGAOEMISSOR, { timeout: 70000 })//orgãoEmissor
    .click()
  cy.get('.mat-option-text').contains('SECRETARIA DE SEGURANCA PUBLICA', { timeout: 80000 }).click({ force: true })//orgãoEmissor 

  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.NOME_MAE, { timeout: 70000 }).type('Maria de Fátima Lima Pereira')
  cy.get(el.FICHA_CLIENTE_DOCUMENTOS.PESSOA_POLITICAEX, { timeout: 70000 }).click()
  //

  cy.contains(el.FICHA_CLIENTE_RESIDENCIAIS.DADOS_RESIDENCIAIS).click()
  cy.get(el.FICHA_CLIENTE_RESIDENCIAIS.NUMERO, { timeout: 70000 }).should('be.visible').type('350')

  cy.wait(4000)
  //Dados Profissionais
  cy.get(el.FICHA_DADOS_PROFISSIONAIS.DADOS_PROFISSIONAIS, { timeout: 70000 }).click({ force: true })

  cy.get(el.FICHA_DADOS_PROFISSIONAIS.NOME_EMPRESA, { timeout: 70000 }).type('Camargo ABF', { force: true })//nome da empresa

  cy.get(el.FICHA_DADOS_PROFISSIONAIS.OCUPACAO, { timeout: 70000 }).click({ force: true })
  cy.get('mat-option').contains('ASSALARIADO').click({ force: true })


  cy.get(el.FICHA_DADOS_PROFISSIONAIS.CARGO, { timeout: 70000 }).click({ force: true })
  cy.get('.mat-option-text').contains(' ACOUGUEIRO ').click({ force: true })

  cy.get(el.FICHA_DADOS_PROFISSIONAIS.PATRIMONIO, { timeout: 70000 }).type('3000000', { force: true })//CampPatrimonio

  cy.get(el.FICHA_DADOS_PROFISSIONAIS.RENDAM, { timeout: 70000 }).type('800000', { force: true })//Renda Mensal

  cy.get(el.FICHA_DADOS_PROFISSIONAIS.OVALORES, { timeout: 70000 }).type('900000', { force: true })//outros valores

  cy.get(el.FICHA_DADOS_PROFISSIONAIS.TELCOMERCIAL, { timeout: 80000 }).type('62 36290102', { force: true })


  cy.contains(el.FICHA_DADOS_VEICULO.DADOS, { timeout: 80000 }).click({ force: true })//Aba dados do Veiculo


  cy.get(el.FICHA_DADOS_VEICULO.CHASSI, { timeout: 80000 }).type('93Y RBB008 NJ 089055')
  cy.wait(5000)

  cy.get(el.FICHA_DADOS_VEICULO.PLACA, { timeout: 80000 }).type('JKK 0529', { force: true })

  cy.get('[data-testid="ufLicensing"] > .mat-select-trigger > .mat-select-value', { timeout: 80000 }).click({ force: true })
  cy.get('.mat-option-text').contains('ACRE', { timeout: 80000 }).click({ force: true })

  //cor
  cy.get('[data-testid="color"] > .mat-select-trigger > .mat-select-value', { timeout: 80000 }).click({ force: true })
  cy.get('.mat-option-text').contains(' Bordô ', { timeout: 80000 }).click({ force: true })

  cy.wait(3000)

  cy.get('button[data-testid="proposal-register_button-register"]', { timeout: 70000 }).click({ force: true })
  cy.get('#mat-dialog-3', { timeout: 80000 }).click({ force: true })
  cy.wait(2000)
  cy.get(".mat-button-wrapper").contains('Sim').click({ force: true })

  cy.wait(3000)

  cy.get('[data-testid="simulation-submission_button-envelope"] > .mat-button-wrapper', { timeout: 80000 }).trigger('mouseover').click({ force: true })
  cy.get('#mat-dialog-4', { timeout: 80000 }).click({ force: true })
  cy.get('#mat-dialog-4 > lib-dialog-submission-confirmation > div > mat-dialog-actions > button').click({ force: true })

  cy.get('[data-testid="input-additional_data-email"]', { timeout: 80000 }).type('lucasgoncalves.silva@actdigital.com')
  cy.get('[data-testid="input-additional_data-phone"]', { timeout: 80000 }).type('61 992254205')

  cy.wait(3000)

  cy.get('#mat-dialog-4', { timeout: 80000 }).click({ force: true })
  cy.get('#mat-dialog-4 > lib-dialog-submission-confirmation > div > mat-dialog-actions > button').click({ force: true })


})





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































