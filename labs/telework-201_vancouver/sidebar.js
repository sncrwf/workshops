// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    teleworkvancouver: [
        {
            type: 'category',
            label: 'Introdução',
            items: [
                'Introduction/vancouver',
                'Introduction/Overview',
                'Introduction/takeoff',
                'Introduction/Import-App',
            ],
        },
        {
            type: 'category',
            label: '1. Fluxo de Trabalho',
            items: [
                'Flow/Create-People-Finder-Spoke',
                'Flow/Create-Decision-Table',
                'Flow/Modify-Main-Flow',
            ],
        },
        {
            type: 'category',
            label: '2. Formulários Inteligentes',
            items: [
                'Smarter-Forms/Playbook',
                'Smarter-Forms/Record-Producer',
            ],
        },
        {
            type: 'category',
            label: '3. [Bônus] Portal',
            items: [
                'Portal/3.1 Branding',
                'Portal/3.2 Add a Widget',
                'Portal/3.3 Create a Widget',
            ],
        },

        'Conclusion/index',
        'CHANGELOG',
        'lab-guide-pdf',
        'Survey',
    ],
};

module.exports = sidebars;
