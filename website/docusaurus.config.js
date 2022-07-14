// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Use Toggle Animation',
  tagline: 'A simple hook for toggling with animation',
  url: 'https://M0rteza-M.github.io/', // Your website URL
  baseUrl: '/use-toggle-animation/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'M0rteza-M', // Usually your GitHub org/user name.
  projectName: 'use-toggle-animation', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Use Toggle Animation',
        logo: {
          alt: 'Use Toggle Animation Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://www.npmjs.com/package/use-toggle-animation',
            position: 'right',
            className: 'header-npm-link',
            'aria-label': 'NPM repository',
          },
          {
            href: 'https://github.com/M0rteza-M/use-toggle-animation',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Use Toggle Animation, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
          id: "github-star",
          content: "If you like use-toggle-animation,&nbsp;<a class=\"announcement__link_Xto+\" href=\"https://github.com/M0rteza-M/use-toggle-animation\" rel=\"noopener noreferrer\" target=\"_blank\">give us a star on GitHub</a>! ⭐️",
          textColor: '#222',
          backgroundColor: '#eee',
          isCloseable: true,
      },
      algolia: {
        appId: 'UU588K93Q2',
        apiKey: 'ad0303c2c67ba356475f332a27f65a83',
        indexName: 'use-toggle-animation',
        contextualSearch: true,
        searchPagePath: false,
      },
    }),
};

module.exports = config;
