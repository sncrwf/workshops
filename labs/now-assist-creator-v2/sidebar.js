// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    nowassistcreatorv2: [
        'yokohama',
        'introduction',
        'use-case',
        {
            type: 'category',
            label: '1. Now Assist for Creator',
            items: [
                'now-assist/0-impersonate',
                'now-assist/1-app-generation',
                'now-assist/2-catalog-generation',
                'now-assist/3-flow-generation',
                'now-assist/4-playbook-generation',
                'now-assist/5-code-generation',
                'now-assist/6-ui-generation',
            ],
        },
        {
            type: 'category',
            label: '2. AI Agents',
            items: [
                'aia/1-create-ai-agent',
                'aia/2-test-ai-agent',
                'aia/3-ai-agent-in-workspace',
            ],
        },
        'lab-guide-pdf',
        'survey',
    ],
};

module.exports = sidebars;
