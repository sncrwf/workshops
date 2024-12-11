// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    visitor: [

        'xanadu',
        {
            type: 'category',
            label: '1. Caso de Uso',
            items: [
                '1.0-introduction/overview',
                '1.0-introduction/takeoff',
                '1.0-introduction/introduction',
                '1.0-introduction/review-app',
            ],
        },
        {
            type: 'category',
            label: '2. Criando Aplicação de Controle de Acesso',
            items: [
                '2.0-visitor-access/overview',
                '2.0-visitor-access/create-app',
                '2.0-visitor-access/import-data',
                '2.0-visitor-access/table-builder-data',
                '2.0-visitor-access/configure-form',
            ],
        },
        {
            type: 'category',
            label: '3. Gerando Spoke para Integração com API',
            items: [
                '3.0-spoke/create-the-spoke',
                '3.0-spoke/test-the-spoke',
            ],
        },
        {
            type: 'category',
            label: '4. Criando Solução de Check-in com DocIntel',
            items: [
                '4.0-docintel/1-use-case',
                '4.0-docintel/2-flow',
                '4.0-docintel/3-create-record-producer',
                '4.0-docintel/4-test-in-portal',
                '4.0-docintel/5-create-workflow',
            ],
        },
        {
            type: 'category',
            label: '5. Modernizando Impressão de Crachá com RPA',
            items: [
                '5.0-rpa/1-vm-connect',
                '5.0-rpa/2-rpa-hub',
                '5.0-rpa/3-rpa-design',
                '5.0-rpa/4-integrate-flow',
            ],
        },


        'lab-guide-pdf',
        'survey',
    ],
};

module.exports = sidebars;
