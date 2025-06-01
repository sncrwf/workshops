// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    rpa: [
        

        {
            type: 'category',
            label: 'Introdução',
            items: [
                'introduction',
                'review-app',

            ],
        },

        {
            type: 'category',
            label: 'Laboratório',
            items: [
                'rpa-hub',
                'vm-connect',
                'rpa-design',
                'finish',
            ],
        },


        'lab-guide-pdf',
        'survey',
    ],
};

module.exports = sidebars;
