// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    teleworkvancouver: [

        'vancouver',

        {
            type: 'category',
            label: 'Gestão de Casos de Teletrabalho',
            items: [
                '0.0-introduction/app-engine-overview',
                '0.0-introduction/lab-goals',
                '0.0-introduction/use-case',
                '0.0-introduction/planning',
                '0.0-introduction/takeoff',
            ],
        },

        {
            type: 'category',
            label: '1. Construir a Fundação',
            items: [
                '1.0-Build-the-Foundation/overview',
                '1.0-Build-the-Foundation/review-input-data',
                '1.0-Build-the-Foundation/create-app',
                '1.0-Build-the-Foundation/import-data',
                '1.0-Build-the-Foundation/table-builder-data',
                '1.0-Build-the-Foundation/configure-telework-form',
                '1.0-Build-the-Foundation/review',
            ],
        },

        {
            type: 'category',
            label: '2. Experiência do Usuário',
            items: [
                '2.0-The-User-Experience/overview',
                '2.0-The-User-Experience/create-record-producer',
                '2.0-The-User-Experience/configure-record-producer',
                '2.0-The-User-Experience/preview-in-aes',
                '2.0-The-User-Experience/preview-in-portal',
                '2.0-The-User-Experience/review',
            ]
        },

        {
            type: 'category',
            label: '3. Automatizar o Trabalho',
            items: [
                '3.0-Automate-Work/overview',
                '3.0-Automate-Work/create-workflow',
                '3.0-Automate-Work/test-workflow',
                '3.0-Automate-Work/review',
            ],
        },

        {
            type: 'category',
            label: '4. Gerenciar o Trabalho',
            items: [
                '4.0-Manage-Work/overview',
                '4.0-Manage-Work/create',
                '4.0-Manage-Work/configure-lists',
                '4.0-Manage-Work/configure-dashboard',
                '4.0-Manage-Work/use',
                '4.0-Manage-Work/review',
            ],
        },

        {
            type: 'category',
            label: 'Conclusão',
            items: [
                '5.0-conclusion/lab-review',
                '5.0-conclusion/resources',
                '5.0-conclusion/appendix',
            ],
        },
        {
            type: 'category',
            label: 'Bônus',
            items: [
                '6.0-Bonus/Create-People-Finder-Spoke',
            ],
        },

        'CHANGELOG',
        'lab-guide-pdf',
        'Survey',

    ],
};

module.exports = sidebars;