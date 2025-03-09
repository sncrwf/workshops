// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    nowassistcreatorv2: [
        'introduction',
        'use-case',
        {
            type: 'category',
            label: 'Laboratório',
            items: [
                '1-app-generation',
                '2-flow-generation',
                '3-playbook-generation',
                '4-code-generation',
                '5-spoke-generation',
                '6-ui-generation',
                '7-test-generation',
            ],
        },
        {
            type: 'category',
            label: 'Bônus',
            items: [
                'skill-kit',
            ],
        },
        'lab-guide-pdf',
        'survey',
    ],
};

module.exports = sidebars;
