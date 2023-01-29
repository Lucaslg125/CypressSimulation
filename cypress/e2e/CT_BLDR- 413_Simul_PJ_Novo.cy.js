///<reference  types="cypress"/>
import 'cypress-xpath';


const el = require('../support/elements').ELEMENTS;
const faker = require('faker-br');
const name = faker.name.findName();
const email = faker.internet.email(name);
const phoneNumber = faker.phone.phoneNumber();
var randomcpf = faker.br.cpf();
var randomCnpj = faker.br.cnpj();


it('CT BLDR-413 PJ NOVO', () => {

  cy.Login()
  cy.wait(3000)
  cy.MenuSimulacao()
  cy.SelecionarVendedor()

  cy.get(el.MENU.BTN_SIMULACAO).trigger('mouseover').should('to.visible').click()

  cy.get(el.CLIENTE.CAMPO_CNPJ).type(randomCnpj).should('to.visible')
  cy.get(el.DADOS_EMPRESA.RAZAO_SOCIAL).type(name).should('have.value', name)
  cy.get(el.DADOS_EMPRESA.DT_ABERTURAEMP).type('01/06/2005{Esc}').should('have.value', '01/06/2005')
  cy.get(el.DADOS_EMPRESA.TEL_EMP).type('8136201126')
  cy.get(el.DADOS_EMPRESA.EMAIL_EMP).type(email)

  cy.get(el.DADOS_EMPRESA.CEP_EMP).type('70330-535{enter}').should('have.value', '70330-535')

  cy.wait(2000)

  cy.get(el.AVALISTA_CNPJ.CPF).type(randomcpf)
  cy.get(el.CLIENTE.CAMPO_NOME).type(name)
  cy.get(el.AVALISTA_CNPJ.DTNASCIMENTO, { timeout: 80000 }).type('01/05/1980{Esc}')
  cy.get(el.CLIENTE.CAMPO_TEL).type('21997250105')
  cy.get(el.CLIENTE.CAMPO_EMAIL).clear()
  cy.get(el.CLIENTE.CAMPO_EMAIL).type('lucasgoncalves.silva@act.com.br')
  cy.get(el.CLIENTE.CAMPO_CEP).type('70330-535{enter}')

  cy.wait(2000)

  cy.get(el.CLIENTE.BTN_CONTINUAR).should('be.visible').trigger('mouseover').click()

  cy.wait(5000)

  cy.get(el.VEICULO.TIPO_VENDA_SHOWROOM, { timeout: 80000 }).click({ force: true })
  cy.get(el.VEICULO.IMG_CAR_KIWD, { timeout: 80000 }).click({ force: true })
  cy.get(el.VEICULO.RDIO_VERSAO_VEICULO, { timeout: 80000 }).click({ force: true })

  cy.wait(3000)

  cy.get(el.VEICULO.BTN_SIMULARVEICULO, { timeout: 80000 }).should('be.visible').click()

  cy.wait(2000)
  //Consentimento para Simulaçao
  cy.get(el.SIMULACAO.MENSG_CONSENTIMENTO_SIMUL, { timeout: 80000 }).should('be.visible').trigger('mouseover').click({ force: true })
  cy.get(el.SIMULACAO.CHECB_SIMUL_FINACIAMENTO, { timeout: 80000 }).should('be.visible').trigger('mouseover').click({ force: true })
  cy.get(el.SIMULACAO.BTN_CONTINUAR_SIMUL_FINACIAMENTO).contains('Continuar').click({ force: true })

  cy.wait(4000)

  cy.get(el.SIMULACAO.ENTRADA_CARD1, { timeout: 80000 }).should('be.visible').clear().type('70,00')
  cy.contains('label', 'Mensal').click()
  cy.wait(5000)

  cy.get(el.SIMULACAO.CARD_SIMU_1_LNK_CONTRATARSER, { timeout: 80000 }).should('be.visible').click()
  cy.wait(5000)


  //cy.get(el.SIMULACAO.CHECK_SEGURO_PROTECAO_FINANCEIRA, { timeout: 80000 }).should('be.checked')
  // cy.get(el.SIMULACAO.CHECK_SEGURO_TRANQUILIDADE, { timeout: 70000 }).click({ force: true })
  // cy.get(el.SIMULACAO.CHECK_SEGURO_TRANQUILIDADE_TOTAL).should('be.checked')
  // cy.get(el.SIMULACAO.CHECK_SEMINOVO_GARANTIDO_COMPLETO).should('be.checked')
  //   cy.get(el.SIMULACAO.CHECK_SEMINOVO_GARANTIDO_COMPLETO, { timeout: 80000 }).click({ force: true })
  //   cy.get('#mat-select-35').click()
  //cy.get('.mat-option-text').contains('12', { timeout: 80000 }).click({ force: true })
  //cy.get(el.SIMULACAO.SEMINOVO_GARANTIDO_COMPLETO_KM).type('90000{enter}')
  // .should('have.value', '90000')

  // cy.get(el.SIMULACAO.SEMINOVO_GARANTIDO_COMPLETO_CHASSI, { timeout: 70000 }).type('93Y RBB008 NJ 089055')
  //   cy.get('#mat-dialog-2', { timeout: 80000 }).should('be.visible').click()
  //   cy.wait(5000)
  //   cy.get(el.SIMULACAO.BTN_CONTRATAR_SEGUROS).contains('Contratar').should('be.visible')
  //  .click({ force: true })

  //  cy.get(el.SIMULACAO.BUTTON_CONTRATAR_SIMULACAO_1, { timeout: 80000 }).should('be.visible').click({ force: true })
  // cy.wait(4000)


  // cy.get(el.SIMULACAO.MODAL_SERVICOS_E_SEGUROS, { timeout: 80000 }).should('be.visible').click()
  cy.wait(5000)



  cy.get(el.SIMULACAO.BTN_CONTRATAR_SEGUROS).contains('Contratar').should('be.visible')
    .click({ force: true })

  cy.get(el.SIMULACAO.BUTTON_CONTRATAR_SIMULACAO_1, { timeout: 80000 }).should('be.visible').click({ force: true })

  cy.get(el.SIMULACAO.BUTTON_CONTINUAR_SIMULACAO).click({ force: true })

  cy.wait(3000)

  //dados Pessoais
  cy.contains(el.DADOS_CNPJ.DADOS_CLIENTE, { timeout: 80000 }).click({ force: true })

  cy.get(el.DADOS_CNPJ.NATUREZA_EMP, { timeout: 70000 }).click({ force: true })
  cy.get('.mat-option-text').contains('FUNDO PRIVADO', { timeout: 80000 }).click({ force: true })

  cy.get(el.DADOS_CNPJ.TAMANHO_EMPRESA, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains('MÉDIO', { timeout: 80000 }).click({ force: true })

  cy.get(el.DADOS_CNPJ.FATURAMENTO_MENSAL, { timeout: 70000 }).type('150000000')


  cy.get(el.DADOS_CNPJ.GRUPO_ATIVIDADE_ECO, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains('COMERCIO SETOR PRIVADO', { timeout: 80000 }).click({ force: true })

  cy.get(el.DADOS_CNPJ.ATIVDADE_ECONOMICA, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains('COMERCIO VAREJISTASEGUNDO', { timeout: 80000 }).click({ force: true })

  cy.contains(el.DADOS_CNPJ.ENDERECO, { timeout: 70000 }).click()
  cy.get(el.FICHA_CLIENTE_RESIDENCIAIS.NUMERO, { timeout: 70000 }).should('be.visible').type('89')
  cy.wait(7000)

  //Aba dados do Veiculo
  cy.contains(el.FICHA_DADOS_VEICULO.DADOS, { timeout: 70000 }).click({ force: true })
  cy.get(el.FICHA_DADOS_VEICULO.CHASSI, { timeout: 80000 }).type('93Y 9SR8V6 PJ 349934')
  cy.wrap('93Y 9SR8V6 PJ 349934').should('contain', '93Y 9SR8V6 PJ 349934')
  cy.wait(5000)

  cy.get(el.FICHA_DADOS_VEICULO.PLACA, { timeout: 80000 }).type('JKK 0529', { force: true })

  cy.get(el.FICHA_DADOS_VEICULO.ESTADO_LICEN, { timeout: 80000 }).click({ force: true })
  cy.get('.mat-option-text').contains('ACRE', { timeout: 80000 }).click({ force: true })
  //cor
  cy.get(el.FICHA_DADOS_VEICULO.COR, { timeout: 80000 }).click({ force: true })
  cy.get('.mat-option-text').contains('Bege', { timeout: 80000 }).click({ force: true })
  cy.wait(6000)

  cy.xpath('/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[2]/lib-accordion[1]/div/div[1]/h2', { timeout: 80000 }).click()

  cy.xpath(el.AVALISTA_1.CELULAR, { timeout: 80000 })
  .type('61992240103').should('have.value', '(61) 9 9224-0103')
  cy.get(el.AVALISTA_PF.SEXO, { timeout: 80000 }).click()

  cy.xpath(el.AVALISTA_1.ESTADO_CIVIL).click()
  cy.get('.mat-option-text').contains('CASADO', { timeout: 80000 }).click({ force: true })
  cy.xpath(el.AVALISTA_1.ESTADO_CIVIL, { timeout: 80000 })
    .should('contain', 'CASADO')

  cy.get(el.AVALISTA_1.NOME_CONJUGUE, { timeout: 80000 })
    .type('Bruna Lemes Teixeira', { force: true })
    .should('have.value', 'Bruna Lemes Teixeira')

  cy.get(el.AVALISTA_1.CPF_CONJUGUE, { timeout: 80000 })
    .type('110.527.510-83', { force: true })
    .should('have.value', '110.527.510-83')

  cy.xpath(el.AVALISTA_1.NACIONALIDADE, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains('Brasil', { timeout: 80000 }).click({ force: true })
  cy.xpath(el.AVALISTA_1.NACIONALIDADE, { timeout: 80000 }).should('contain', 'Brasil')

  cy.xpath(el.AVALISTA_1.UF, { timeout: 70000 }).click()// UF
  cy.get('.mat-option-text').contains('SAO PAULO', { timeout: 80000 }).click({ force: true })
  cy.xpath(el.AVALISTA_1.UF, { timeout: 80000 }).should('contain', 'SAO PAULO')

  cy.wait(1000)

  cy.get(el.AVALISTA_1.NATURALIDADE, { timeout: 80000 }).click()// Naturalidade
  cy.get('.mat-option-text').contains('ADOLFO', { timeout: 80000 }).click({ force: true })
  cy.get(el.AVALISTA_1.NATURALIDADE, { timeout: 80000 })
    .should('contain', 'ADOLFO')

  cy.get(el.AVALISTA_1.RELACIONAMENTO_COM_EMPRESA, { timeout: 80000 }).click({ force: true })
  cy.get('.mat-option-text').contains('EMPRESA TEM COMO VINC ADM', { timeout: 80000 }).click({ force: true }).should('contain', 'EMPRESA TEM COMO VINC ADM')

  cy.wait(5000)

  cy.contains(el.AVALISTA_1.DOCUMENTOS, { timeout: 80000 })
    .should('be.visible').click({ force: true })

  cy.get(el.AVALISTA_1.CARTEIRA_IDENTIDADE).should('be.visible').click()

  cy.get(el.AVALISTA_1.NUMERO_DOCUMENTO, { timeout: 80000 })
    .type('419953036', { force: true }).should('have.value', '419953036')

  cy.get(el.AVALISTA_1.PAIS_DO_DCOUMENTO, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains('Brasil', { timeout: 80000 }).click({ force: true })
  cy.get(el.AVALISTA_1.PAIS_DO_DCOUMENTO, { timeout: 80000 })
    .should('contain', 'Brasil')

  cy.get(el.AVALISTA_1.UF_DO_DCOUMENTO, { timeout: 80000 }).click()
  cy.get('.mat-option-text').contains('BAHIA', { timeout: 80000 }).click({ force: true })
  cy.get(el.AVALISTA_1.UF_DO_DCOUMENTO, { timeout: 80000 }).should('contain', 'BAHIA')

  cy.get(el.AVALISTA_1.DATA_DE_EMISSAO).type('19/07/2002')
    .should('have.value', '19/07/2002')
    .type('{Esc}')

  cy.get(el.AVALISTA_1.ORGAO_EMISSOR, { timeout: 70000 }).click()
  cy.get('.mat-option-text').contains('SECRETARIA SEGURANCA PUBLICA', { timeout: 80000 }).click({ force: true })
  cy.get(el.AVALISTA_1.ORGAO_EMISSOR, { timeout: 70000 }).should('contain', 'SECRETARIA SEGURANCA PUBLICA')


  cy.get(el.AVALISTA_1.NOME_MAE).type('Maria Rosana Silva Neves')
    .should('have.value', 'Maria Rosana Silva Neves')

  cy.get(el.AVALISTA_1.POLITICAMENTE_EXPOSTA, { timeout: 80000 }).click({ force: true })
  cy.wait(5000)

  cy.contains(el.AVALISTA_1.DADOS_RESIDENCIAIS, { timeout: 80000 }).should('be.visible').click({ force: true })
  cy.get(el.AVALISTA_1.CEP, { timeout: 80000 }).type('70330-535', { force: true }).should('have.value', '70.330-535')

  cy.get(el.AVALISTA_1.NUMERO_ENDERECO, { timeout: 80000 }).type('201', { force: true }).should('have.value', '201')
  cy.wait(5000)

  //Dados Profissionais

  cy.contains('h2', 'Dados Profissionais do Avalista 1', { timeout: 70000 }).click({ force: true })
  cy.get(el.AVALISTA_1.NOME_DA_EMPRESA, { timeout: 70000 }).type('MG Advogados', { force: true })//nome da empresa

  cy.get(el.AVALISTA_1.OCUPACAO, { timeout: 70000 }).click({ force: true })
  cy.get('mat-option').contains('ASSALARIADO').click({ force: true })

  cy.get(el.AVALISTA_1.OCUPACAO, { timeout: 70000 }).should('contain', 'ASSALARIADO')

  cy.get(el.AVALISTA_1.CARGO, { timeout: 70000 }).click({ force: true })
  cy.get('.mat-option-text').contains('ADVOGADO').click({ force: true })
  cy.get(el.AVALISTA_1.CARGO, { timeout: 70000 }).should('contain', 'ADVOGADO')

  cy.get(el.AVALISTA_1.PATRIMONIO, { timeout: 70000 }).type('8000000', { force: true }).should('have.value', 'R$ 80.000,00')
  cy.get(el.AVALISTA_1.RENDA_MENSAL, { timeout: 70000 }).type('1100000', { force: true }).should('have.value', 'R$ 11.000,00')//Renda Mensal
  cy.get(el.AVALISTA_1.OUTROS_VALORES, { timeout: 70000 }).type('1400000', { force: true }).should('have.value', 'R$ 14.000,00')//outros valores
  cy.get(el.AVALISTA_1.TEL_COMERCIAL, { timeout: 80000 }).type('62 36290102', { force: true }).should('have.value', '(62) 3629-0102')

  cy.wait(5000)

  cy.get(el.AVALISTA_1.BTN_ENVIAR_PROPOSTA, { timeout: 70000 }).should('be.visible').click({ force: true })
  cy.get(el.AVALISTA_1.MENSAGEM_DESEJA_ENVIAR_PROPOSTA, { timeout: 80000 }).click({ force: true })
  cy.wait(5000)
  cy.get(el.AVALISTA_1.BTN_SIM_PARA_ENVIAR).contains('Sim').click({ force: true })


})
