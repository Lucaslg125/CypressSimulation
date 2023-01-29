
export const ELEMENTS = {

    LOGIN: {

        USER: '#input-text_login-username',
        SENHA: 'input[data-testid="input-text_login-password"]',
        BTN_LOGIN: '[data-testid="login_button"]',

    },

    MENU: {

        ICONETL: 'svg[class="icon-menu"]',
        NOVA_SIMULACAO: 'body > app-root > div > router-outlet > div > app-header > app-sidebar > div > div > div.options > ul > li:nth-child(1) > a',
        BTN_SIMULACAO: '[data-testid="dealership-table_btn-init-simulation"]',


    },

    VENDEDOR: {

        TABELA_VENDEDOR: '.table-body > :nth-child(1) > .ng-star-inserted',
        CELULA_VENDEDOR: '.mat-select-placeholder',
        SELECIONAR_VENDEDOR: '[data-testid="dealership-table_btn-seller-Change"] > .mat-select-trigger > .mat-select-value',
        NOME_VENDEDOR:'#mat-option-6 > .mat-option-text',

    },

    CLIENTE: {
      
        CAMPO_CPF: '[data-testid="input-text_document"]',
        CAMPO_CNPJ: '[data-testid="input-text_document"]',
        CAMPO_NOME: '[data-testid="input-text_client-name"]',
        DTNASCIMENTO: '[data-testid="datepicker_client-dateBirth"]',
        CAMPO_TEL: '[data-testid="input-text_client-phone"]',
        CAMPO_EMAIL: '[data-testid="input-text_client-email"]',
        CAMPO_CEP: '[data-testid="input-text_client-cep"]',
        BTN_CONTINUAR: '[data-testid="operator-register_button-register"]',

    },

    VEICULO: {

        TIPO_VENDA_SHOWROOM: '#mat-button-toggle-1-button > .mat-button-toggle-label-content',
        TIPO_VENDA_DIRETA: 'mat-button-toggle[value="Venda Direta"]',
        TIPO_VENDA_USADO: 'button[id="mat-button-toggle-3-button"]',
        COMBO_MARCA: 'mat-select[id="mat-select-2"]',
        VEICULO_USADO: '#mat-select-3 > .mat-select-trigger > .mat-select-value',
        CB_USADO_VERSAO: '#mat-select-4 > .mat-select-trigger > .mat-select-value',
        CB_USADO_FABR: '#mat-select-6 > .mat-select-trigger > .mat-select-value',
        CB_VEICULO_USADO: '#mat-option-277',
        ISENTO: 'mat-radio-button[id="mat-radio-3"]',
        IMG_CAR_KIWD: 'img[src="http://d3ruxh1ov8kohw.cloudfront.net/models/17272/photos/f111715e62408a91784c7af57a13699e5b092541"]',
        CHECKBCONSEFINANC: 'input[id="mat-checkbox-6-input"]',
        RDIO_VERSAO_VEICULO: 'input[value="Outsider 1.0"]',
        COMBO_ANOMODELO: 'mat-select[data-testid="vehicle_select-modelYear"]',
        COMBO_ANOFABR: 'mat-select[data-testid="vehicle_select-factureYear"]',
        CHCKB_TPVEICULOTAXI: 'mat-checkbox[data-testid="vehicle_checkbox-VehicleType1"]',
        CHCKB_VEICULOADAPTADO: 'mat-checkbox[data-testid="vehicle_checkbox-VehicleType2"]',
        VALOR_BASE_VEICULO: 'input[id="vehicle-base-price"]',
        VALOR_TOTAL_VEICULO: 'input[id="vehicle-total"]',
        BTN_SIMULARVEICULO: '[data-testid="user-register_button-register"]',

    },


    VEICULO_USADO: {

        ESTADO_LICENCIAMENTO: 'mat-select[id="ufLicensing"]',
        CB_COR_USADO: '[data-testid="color"]',
        MARCA: '#mat-select-2 > .mat-select-trigger > .mat-select-value',

    },
    SIMULACAO: {

        //  CARD_SIMU_1_LNK_CONTRATARSER: ('a', "Contratar serviços e seguros"),
        CLIENTE_NOME: '.col-lg-5 > .row > :nth-child(1) > .info > strong',
        CLIENTE_DTNASCIMENTO: '.col-lg-5 > .row > :nth-child(3) > .info > strong',
        MENSG_CONSENTIMENTO_SIMUL:'mat-dialog-container[id="mat-dialog-0"]',
        CLIENTE_CEP: '.col-lg-5 > .row > :nth-child(4) > .info > strong',
        CLIENTE_UF: '.col-lg-5 > .row > :nth-child(5) > .info > strong',
        CLIENTE_VERSAO: '.col-lg-4 > .info-title',
        CLIENTE_ANO_FABRICACAO: '.col-lg-4 > .row > :nth-child(1) > .info > strong',
        CLIENTE_TIPO: '.col-lg-4 > .row > :nth-child(3) > .info > strong',
        CLIENTE_TIPO_FINANCIAMENTO: '.card-content > .row > :nth-child(1) > .info > strong',
        CLIENTE_MODELO: '.col-lg-4 > .row > :nth-child(2) > .info > strong',
        CLIENTE_CARENCIA: '.card-content > .row > :nth-child(3) > .info > strong',
        CHECB_SIMUL_FINACIAMENTO:'#mat-checkbox-2 > label > div',
        BTN_CONTINUAR_SIMUL_FINACIAMENTO: '.mat-button-wrapper',
        CARD_SIMU_1_LNK_CONTRATARSER: 'a[data-testid="applyInsuranceService_0"]',
        MODAL_SERVICOS_E_SEGUROS: 'mat-dialog-container[class="mat-dialog-container ng-tns-c52-91 ng-trigger ng-trigger-dialogContainer ng-star-inserted"]',
        ENTRADA_CARD1: 'input[data-testid="entryInputPercentage_0"]',
        CHECK_SEGURO_PROTECAO_FINANCEIRA: 'input[id="mat-checkbox-14-input"]',
        CHECK_SEGURO_TRANQUILIDADE: 'input[id="mat-checkbox-15-input"]',
        CHECK_SEGURO_TRANQUILIDADE_TOTAL: 'input[id="mat-checkbox-16-input"]',
        CHECK_SEMINOVO_GARANTIDO_COMPLETO: 'input[id="mat-checkbox-17-input"]',
        CHECK_SEMINOVO_GARANTIDO_REDUZIDO: 'input[id="mat-checkbox-18-input"]',
        SEMINOVO_GARANTIDO_COMPLETO_KM: '#mat-input-9',
        SEMINOVO_GARANTIDO_COMPLETO_CHASSI: 'input[id="mat-input-10"]',
        SEMINOVO_GARANTIDO_REDUZIDO_KM: 'input[id="mat-input-11"]',
        SEMINOVO_GARANTIDO_REDUZIDO_CHASSI: 'input[id="mat-input-12"]',
        SERV_SEGUROS_CKBOX_EGVN: 'input[id="mat-checkbox-6-input"]',
        CB_DURACAO_EGVN: 'mat-select[id="mat-select-18"]',
        CHECKMANUTENCAO: 'mat-checkbox[id="mat-checkbox-16"]',
        CBDuracaoManuten: 'mat-select[id="mat-select-46"]',
        CheckBoxRevisao: 'mat-checkbox[id="mat-checkbox-17"]',
        ComboRevisaoDuracao: 'mat-select[id="mat-select-47"]',
        ComboRevisãoKM: 'mat-select[id="mat-select-50"]',
        CHCKB_INSHOWR: 'input[id="mat-checkbox-7-input"]',
        CheckBoxRP: 'input[id="mat-checkbox-8-input"]',
        BTN_CONTRATAR_SEGUROS: "#mat-dialog-2 > ng-component > div > mat-dialog-actions > button.mat-focus-indicator.btn.mat-flat-button.mat-button-base.mat-primary",
        BUTTON_CONTRATAR_SIMULACAO_1: 'button[data-testid="dialog-simulation_buttoncontract_0"]',
        BTN_CONTRATAR_SEG: 'button[class="mat-focus-indicator btn mat-flat-button mat-button-base mat-primary"]',
        BTN_CONTRATAR: ('button', 'Contratar'),
        BTN_CONTINUAR: 'button[data-testid="summary-tab_button-continue"]',
        BUTTON_CONTINUAR_SIMULACAO: 'button[data-testid="summary-tab_button-continue"]',

    },

    FICHA_CLIENTE: {

        DADOS_PESSOAIS: ':nth-child(2) > :nth-child(1) > .accordion > .accordion-header > .accordion-header--title',
        DP_TELEFONEC: 'input[data-testid="cellphone"]',
        SEXO_FEMININO: '[data-testid="customerGender-FEMININO"] > .mat-radio-label > .mat-radio-label-content',
        RDO_FEMININO: 'mat-radio-button[data-testid="gender-FEMININO"]',
        ESTADO_CIVIL: 'mat-select[data-testid="civilState"]',
        DP_CAMPO_CONJUGUE: 'input[data-testid="customerSpouseName"]',
        DP_CPFCONJUGUE: 'input[data-testid="customerSpousecpfCnpj"]',
        DP_COMBONACIO: '#nacionality',
        DP_COMBOUF: '[data-testid="customerProvinceBirth"] > .mat-select-trigger > .mat-select-value',
        //'mat-select[data-testid="customerProvinceBirth"]',
        DP_NATURALIDADE: '[data-testid="customerNaturalness"] > .mat-select-trigger > .mat-select-value',
    },

    FICHA_CLIENTE_DOCUMENTOS: {

        DOCUMENTOS: ':nth-child(2) > :nth-child(3) > .accordion > .accordion-header > .accordion-header--title',
        DP_DOCUMENTOS_RG: 'mat-radio-button[id="mat-radio-24"]',
        DP_DOCUMENTOS_CARTEIRA_IDENTIDADE: '[data-testid="customerDocumentType-CARTEIRA DE IDENTIDADE"] > .mat-radio-label > .mat-radio-label-content',
        NRG: 'input[data-testid="customerDocumentNumber"]',
        COMBOPAISDOC: '[data-testid="customerDocumentEmissionerCountry"] > .mat-select-trigger > .mat-select-value',
        UF_DOC: '[data-testid="customerDocumentEmissionerProvince"] > .mat-select-trigger > .mat-select-value',
        DTEMISSAO: '#documentEmissionDate',
        ORGAOEMISSOR: '#documentEmissioner',
        NOME_MAE: 'input[data-testid="customerMotherName"]',
        PESSOA_POLITICAEX: 'mat-radio-button[data-testid="politicalExposition-NÃO"]',
    },


    FICHA_CLIENTE_RESIDENCIAIS: {

        DADOS_RESIDENCIAIS: ('h2', 'Dados residenciais'),
        NUMERO: 'input[data-testid="customerAddressNumber"]',
    },

    FICHA_DADOS_PROFISSIONAIS: {

        DADOS_PROFISSIONAIS: 'lib-accordion.ng-star-inserted > .accordion > .accordion-header',
        NOME_EMPRESA: 'input[data-testid="EmployerDetail"]',
        OCUPACAO: '[data-testid="employerOccupation"] > .mat-select-trigger > .mat-select-value',
        CARGO: 'mat-select[data-testid="employerProfession"] > .mat-select-trigger > .mat-select-value',
        PATRIMONIO: 'input[data-testid="employerPatrimony"]',
        RENDAM: 'input[data-testid="employerIncome"]',
        OVALORES: 'input[data-testid="employerOtherIncome"]',
        TELCOMERCIAL: '[data-testid="employerBusinessPhone"]',
        CNPJ: '#cnpj',

    },

    FICHA_DADOS_VEICULO: {

        DADOS: ('h2', 'Dados do Veículo'),
        CHASSI: 'input[data-testid="chassi"]',
        PLACA: 'input[data-testid="plateNumber"]',
        ESTADO_LICEN: '[data-testid="ufLicensing"] > .mat-select-trigger > .mat-select-value',
        COR: '[data-testid="color"] > .mat-select-trigger > .mat-select-value',
        KM: 'input[data-testid="kilometrage"]',
        RENAVAM: 'input[data-testid="renavam-id"]',
        TPCOMBUSTIVEL: '#mat-radio-20 > .mat-radio-label > .mat-radio-label-content',
        RADIO: '[data-testid="acessories12213"] > .mat-checkbox-layout > .mat-checkbox-inner-container',
        KIT_MULT: '[data-testid="acessories12214"] > .mat-checkbox-layout > .mat-checkbox-inner-container',
        VIDRO_ELETRICO: '[data-testid="acessories12215"] > .mat-checkbox-layout > .mat-checkbox-inner-container',
        ARCONDICIONADO: '[data-testid="acessories12216"] > .mat-checkbox-layout > .mat-checkbox-inner-container',
        FAROIS: '[data-testid="evaluations97-Regular"] > .mat-radio-label > .mat-radio-label-content',
        FUNILARIA: '[data-testid="evaluations94-Good"] > .mat-radio-label > .mat-radio-label-content',
        PNEUS: '[data-testid="evaluations95-Good"] > .mat-radio-label > .mat-radio-label-content',
        ESTOFAMENTO: '[data-testid="evaluations96-Good"] > .mat-radio-label > .mat-radio-label-content',
        DADOS_AVALISTA1: ('h2', 'Dados Pessoais do Avalista 1'),

    },

    DADOS_EMPRESA: {
      
        
        RAZAO_SOCIAL: '[data-testid="input-text_company-name"]',
        DT_ABERTURAEMP: '[data-testid="datepicker_company-date"]',
        TEL_EMP: '[data-testid="input-text_company-phone"]',
        EMAIL_EMP: '[data-testid="input-text_company-email"]',
        CEP_EMP: '[data-testid="input-text_company-cep"]',

    },

    AVALISTA_CNPJ: {

        CPF: 'input[data-testid="input-text_client_document_pf"]',
        CAMPO_NOME: 'input[data-testid="input-text_client-name"]',
        DTNASCIMENTO: 'input[data-testid="datepicker_client-dateBirth"]',
        CAMPO_TEL: 'input[data-testid="input-text_client-phone"]',
        CAMPO_EMAIL: 'input[data-testid="input-text_client-email"]',
        CAMP_CEP: 'input[data-testid="input-text_client-cep"]',
        CB_ANOMODELO: 'mat-select[data-testid="vehicle_select-modelYear"]',
        CB_ANOFABR: 'mat-select[data-testid="vehicle_select-factureYear"]',
        TIPO_AVALISTA: 'mat-radio-button[data-testid="guarantorType-Guarantor"]',

    },

    DADOS_CNPJ: {

        DADOS_CLIENTE: ('h2', 'Dados do cliente'),
        NATUREZA_EMP: '[data-testid="legalNature"] > .mat-select-trigger > .mat-select-value',
        TAMANHO: 'mat-select[data-testid="size"]',
        TAMANHO_EMPRESA: 'mat-select[data-testid="size"]',
        FATURAMENTO_MENSAL: 'input[data-testid="income"]',
        GRUPO_ATIVIDADE_ECO: 'mat-select[data-testid="industrialSegment"]',
        ATIVDADE_ECONOMICA: 'mat-select[data-testid="economicActivity"]',
        ENDERECO: ('h2', 'Endereço'),


    },

    AVALISTA_PF: {


        CAMPO_NOME: 'input[data-testid="guarantorName"]',
        CPF: 'input[data-testid="guarantorCpfCnpj"]',
        DTNASCIMENTO: 'input[data-testid="datepicker_client-dateBirth"]',
        CAMPO_TEL: 'input[data-testid="guarantorHomePhone1"]',
        CAMPO_EMAIL: 'input[data-testid="input-text_client-email"]',
        SEXO: 'mat-radio-button[data-testid="guarantorGender1-FEMININO"]',
        CAMP_CEP: 'input[data-testid="input-text_client-cep"]',
        CB_ANOMODELO: 'mat-select[data-testid="vehicle_select-modelYear"]',
        CB_ANOFABR: 'mat-select[data-testid="vehicle_select-factureYear"]',
        TIPO_AVALISTA: 'mat-radio-button[data-testid="guarantorType-Guarantor"]',
        ADICIONAR_AVALISTA: '.col-12 > a',

    },

    RESULTADO_SIMULACAO: {

        CAMPO_NOME: ':nth-child(1) > :nth-child(1) > .info > .value',
        CPF: ':nth-child(1) > :nth-child(2) > .info > .value',
        TIPO_CLIENTE: ':nth-child(1) > :nth-child(3) > .info > .value',
        TIPO_VENDA: ':nth-child(1) > :nth-child(4) > .info > .value',
        INSECAO: ':nth-child(1) > :nth-child(5) > .info > .value',
        ESTADO: ':nth-child(1) > :nth-child(6) > .info > .value',
        VEICULO: ':nth-child(2) > :nth-child(1) > .info > .value',
        ANO_FABRICACAO: ':nth-child(2) > :nth-child(2) > .info > .value',
        ANO_MODELO: ':nth-child(2) > :nth-child(3) > .info > .value',
        TIPO: ':nth-child(2) > :nth-child(4) > .info > .value',
        VALOR_VEICULO: ':nth-child(3) > :nth-child(1) > .info > .value',




    },

    AVALISTA_1: {

        ADICIONAR: '.col-12 > a',
        TIPO_AVALISTA: 'mat-radio-button[data-testid="guarantorType-Guarantor"]',
        DADOS_PESSOAIS: ('h2', 'Dados Pessoais do Avalista 1'),
        TIPO_AVALISTA: 'mat-radio-button[data-testid="guarantorType-Guarantor"]',
        CAMPO_NOME: 'input[data-testid="guarantorName"]',
        CPF: 'input[data-testid="guarantorCpfCnpj"]',
        DTNASCIMENTO: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[4]/app-input-datepicker/div/mat-form-field/div/div[1]/div[3]/input',
        CAMPO_EMAIL: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[5]/app-input/div/mat-form-field/div/div[1]/div[3]/input',
        TEL_RESIDENCIAL: '[data-testid="guarantorHomePhone1"]',
        CELULAR: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[7]/app-input/div/mat-form-field/div/div[1]/div[3]/input',
        SEXO: 'mat-radio-button[data-testid="guarantorGender1-FEMININO"]',
        ESTADO_CIVIL: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[9]/app-select/div/mat-select',
        NOME_CONJUGUE: '[data-testid="guarantorSpouseName1"]',
        CPF_CONJUGUE: '[data-testid="guarantorSpousecpfCnpj1"]',
        NACIONALIDADE: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[12]/app-select/div/mat-select',
        UF: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[13]/app-select/div/mat-select',
        RELACIONAMENTO_COM_EMPRESA:'[data-testid="businessRelationshipType"] > .mat-select-trigger > .mat-select-value',
        NATURALIDADE: 'mat-select[data-testid="guarantorNaturalness1"]',
        DOCUMENTOS: ('h2', 'Documentos do Avalista 1'),
        CARTEIRA_IDENTIDADE: '[data-testid="guarantorDocumentType1-CARTEIRA DE IDENTIDADE"] > .mat-radio-label > .mat-radio-label-content',
        NUMERO_DOCUMENTO: 'input[data-testid="guarantorDocumentNumber1"]',
        PAIS_DO_DCOUMENTO: '[data-testid="guarantorDocumentEmissionerCountry1"] > .mat-select-trigger > .mat-select-value',
        UF_DO_DCOUMENTO: '[data-testid="guarantorDocumentEmissionerProvince1"] > .mat-select-trigger > .mat-select-value',
        DATA_DE_EMISSAO: '[data-testid="guarantorDocumentEmissionDate1"]',
        ORGAO_EMISSOR: '[data-testid="guarantorDocumentEmissioner1"] > .mat-select-trigger > .mat-select-value',
        NOME_MAE: '[data-testid="guarantorMotherName1"]',
        POLITICAMENTE_EXPOSTA: '[data-testid="guarantor_documents_1"] > .row > .col-md-8 > app-radio-group.ng-star-inserted > [data-component="radio-group"] > #politicalExposition > [data-testid="politicalExposition-NÃO"] > .mat-radio-label',
        DADOS_RESIDENCIAIS: ('h2', 'Dados Residenciais do Avalista 1'),
        CEP: '[data-testid="postCode"]',
        NUMERO_ENDERECO: '[data-testid="guarantorAddressNumber1"]',
        DADOS_PROFISSIONAIS: ('h2', 'Dados Profissionais do Avalista 1'),
        NOME_DA_EMPRESA: '[data-testid="guarantorEmployerDetail1"]',
        OCUPACAO: '[data-testid="guarantorOccupation1"] > .mat-select-trigger > .mat-select-value',
        CARGO: '[data-testid="guarantorProfession1"] > .mat-select-trigger > .mat-select-value',
        PATRIMONIO: '[data-testid="guarantorPatrimony1"]',
        RENDA_MENSAL: '[data-testid="guarantorIncome1"]',
        OUTROS_VALORES: '[data-testid="guarantorOtherIncome1"]',
        TEL_COMERCIAL: '[data-testid="guarantorEmployerBusinessPhone1"]',
        CNPJ: '[data-testid="guarantorCnpj"]',
        BTN_ENVIAR_PROPOSTA: '[data-testid="proposal-register_button-register"] > .mat-button-wrapper',
        MENSAGEM_DESEJA_ENVIAR_PROPOSTA: '#mat-dialog-3',
        BTN_SIM_PARA_ENVIAR: ".mat-button-wrapper",
    },

    AVALISTA_2: {

        ADICIONAR: '.col-12 > a',
        TIPO_AVALISTA: 'mat-radio-button[data-testid="guarantorType-Guarantor_2"]',
        DADOS_PESSOAIS: ('h2', 'Dados Pessoais do Avalista 2'),
        TIPO_AVALISTA: '[data-testid="guarantor_2"] > .row > :nth-child(1) > app-radio-group.ng-star-inserted > [data-component="radio-group"] > #guarantorType > [data-testid="guarantorType-Guarantor"] > .mat-radio-label',
        CAMPO_NOME: ':nth-child(2) > app-input.ng-star-inserted > [data-component="input"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > [data-testid="name"]',
        CPF: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[3]/app-input/div/mat-form-field/div/div[1]/div[3]/input',
        DTNASCIMENTO: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[4]/app-input-datepicker/div/mat-form-field/div/div[1]/div[3]/input',
        CAMPO_EMAIL: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[5]/app-input/div/mat-form-field/div/div[1]/div[3]/input',
        TEL_RESIDENCIAL: '[data-testid="guarantorHomePhone2"]',
        CELULAR: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[7]/app-input/div/mat-form-field/div/div[1]/div[3]/input',
        SEXO: '[data-testid="guarantorGender2-FEMININO"] > .mat-radio-label > .mat-radio-label-content',
        ESTADO_CIVIL: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[9]/app-select/div/mat-select',
        NOME_CONJUGUE: '[data-testid="guarantorSpouseName2"]',
        CPF_CONJUGUE: '[data-testid="guarantorSpousecpfCnpj2"]',
        NACIONALIDADE: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[12]/app-select/div/mat-select',
        UF: '/html/body/app-root/div/lib-simulation/div/div/div[2]/div[2]/lib-customer-record/div/div[2]/div[1]/div[3]/lib-accordion[1]/div/div[2]/lib-blade-form/div/form/div/div[13]/app-select/div/mat-select',
        NATURALIDADE: 'mat-select[data-testid="guarantorNaturalness2"]',
        DOCUMENTOS: ('h2', 'Documentos do Avalista 2'),
        CARTEIRA_IDENTIDADE: '[data-testid="guarantorDocumentType2-CARTEIRA DE IDENTIDADE"] > .mat-radio-label > .mat-radio-label-content',
        NUMERO_DOCUMENTO: 'input[data-testid="guarantorDocumentNumber2"]',
        PAIS_DO_DCOUMENTO: '[data-testid="guarantorDocumentEmissionerCountry2"] > .mat-select-trigger > .mat-select-value',
        UF_DO_DCOUMENTO: '[data-testid="guarantorDocumentEmissionerProvince2"] > .mat-select-trigger > .mat-select-value',
        DATA_DE_EMISSAO: '[data-testid="guarantorDocumentEmissionDate2"]',
        ORGAO_EMISSOR: '[data-testid="guarantorDocumentEmissioner2"] > .mat-select-trigger > .mat-select-value',
        NOME_MAE: '[data-testid="guarantorMotherName2"]',
        POLITICAMENTE_EXPOSTA: '[data-testid="guarantor_documents_2"] > .row > .col-md-8 > app-radio-group.ng-star-inserted > [data-component="radio-group"] > #politicalExposition > [data-testid="politicalExposition-NÃO"] > .mat-radio-label',
        DADOS_RESIDENCIAIS: ('h2', 'Dados Residenciais do Avalista 2'),
        CEP: '[data-testid="guarantor_address_2"] > .row > :nth-child(1) > app-input.ng-star-inserted > [data-component="input"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > [data-testid="postCode"]',
        NUMERO_ENDERECO: '[data-testid="guarantorAddressNumber2"]',
        DADOS_PROFISSIONAIS: ('h2', 'Dados Profissionais do Avalista 2'),
        NOME_DA_EMPRESA: '[data-testid="guarantorEmployerDetail2"]',
        OCUPACAO: '[data-testid="guarantorOccupation2"] > .mat-select-trigger > .mat-select-value',
        CARGO: '[data-testid="guarantorProfession2"] > .mat-select-trigger > .mat-select-value',
        PATRIMONIO: '[data-testid="guarantorPatrimony2"]',
        RENDA_MENSAL: '[data-testid="guarantorIncome2"]',
        OUTROS_VALORES: '[data-testid="guarantorOtherIncome2"]',
        TEL_COMERCIAL: '[data-testid="guarantorEmployerBusinessPhone2"]',
        CNPJ: '[data-testid="guarantorCnpj"]',
        BTN_ENVIAR_PROPOSTA: '[data-testid="proposal-register_button-register"] > .mat-button-wrapper',
        MENSAGEM_DESEJA_ENVIAR_PROPOSTA: '#mat-dialog-3',
        BTN_SIM_PARA_ENVIAR: ".mat-button-wrapper",
    },

}