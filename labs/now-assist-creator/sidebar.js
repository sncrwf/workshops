// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    nowassistcreator: [
        'introduction',
        'use-case',
        {
            type: 'category',
            label: 'Laboratório',
            items: [
                '0-impersonate',
                '1-app-generation',
                '2-catalog-generation',
                '3-flow-generation',
                '4-playbook-generation',
                '5-manage-collaborators',
                '6-code-generation',
                '7-testing',
            ],
        },
        'lab-guide-pdf',
        'survey',
    ],
};

module.exports = sidebars;
