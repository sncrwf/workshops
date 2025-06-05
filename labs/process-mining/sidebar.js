// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    pm: [
        '0-introduction',
        '1-exploring',
        {
            type: 'category',
            label: '2 - Usando o Analyst Workbench para identificar oportunidades de melhoria',
            link: {
                type: 'doc',
                id: '2-opportunities',
            },
            items: [
                '2.1-channel-analysis',
                '2.2-automation',
                '2.3-process-change',
                '2.4-multihop',
            ],
        },
        '3-first-project',
        '4-configurations',      
        '5-next-steps',  
        'lab-guide-pdf',
        'survey',
    ],
};

module.exports = sidebars;
