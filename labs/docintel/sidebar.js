// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docintel: [
        
        'introduction',
        {
            type: 'category',
            label: '1. Desenhe a solução',
            items: [
                'design/1-locate-doc',
                'design/2-explore-tables',
            ],
        },
        {
            type: 'category',
            label: '2. Configure o caso de uso do Document Intelligence e Integração',
            items: [
                'configure-docintel/1-use-case',
                'configure-docintel/2-flow',
                'configure-docintel/3-advanced',
            ],
        },
        {
            type: 'category',
            label: '3. Processo End-to-End',
            items: [
                'e2e/1-submit',
                'e2e/2-autofill',
                'e2e/3-export',
            ],
        },

        'lab-guide-pdf',
        'survey',
    ],
};

module.exports = sidebars;
