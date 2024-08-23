// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docintel: [
        
        'introduction',
        {
            type: 'category',
            label: '1. Design the solution',
            items: [
                'design/1-locate-doc',
                'design/2-explore-tables',
            ],
        },
        {
            type: 'category',
            label: '2. Configure a Document Intelligence use case and its integration',
            items: [
                'configure-docintel/1-use-case',
                'configure-docintel/2-flow',
                'configure-docintel/3-advanced',
            ],
        },
        {
            type: 'category',
            label: '3. End-to-end process',
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
