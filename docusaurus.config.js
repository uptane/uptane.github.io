// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Uptane',
  tagline: 'Securing Software Updates for Automobiles',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://uptane.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uptane', // Usually your GitHub org/user name.
  projectName: 'uptane.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    //Add Font Awesome stylesheets
    '/fonts/font-awesome/fontawesome.css',
    '/fonts/font-awesome/solid.css',
    '/fonts/font-awesome/regular.css',
    '/fonts/font-awesome/brands.css'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          lastVersion: "current",
          versions: {
            current: {
              label: 'Latest (2.1.0)',
            },
            "2.0.0": {
              label: "2.0.0",
            },
            "1.2.0": {
              label: "1.2.0",
            },
            "1.1.0": {
              label: "1.1.0",
            },
            "1.0.0": {
              label: "1.0.0",
            },
          },
        },
        blog: {
          showReadingTime: true,
          path: 'blog', // The directory containing your blog posts
          routeBasePath: 'blog', // The base path for the blog pages
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-G856J3S8ZG',
        anonymizeID: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        apiKey: "#",
        appId: "#",
        indexName: "#",
      },
      navbar: {
        logo: {
          alt: 'Uptane Logo',
          src: '/img/uptane_logo_light.svg',
          srcDark: '/img/uptane_logo_dark.svg'
        },
        items: [

          {
            to: '/docs/learn-more/about', label: 'About Us', position: 'left',
          },
          {
            to: '/docs/standard/uptane-standard', label: 'Standard', position: 'left',
          },
          {
            label: 'Best Practices',
            to: '/docs/deployment/best-practices',
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Enhancements',
            position: 'left',
            items: [
              {
                label: 'POUF',
                to: 'docs/enhancements/pouf/pouf-main',
              },
              {
                label: 'PUREs',
                to: 'docs/enhancements/pures/pure1',
              },
            ],
          },
          { to: '/docs/learn-more/getting-started', label: 'Learn More', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: 'https://github.com/uptane/uptane.github.io',
            label: ' ',
            position: 'right',
            target: '_blank',
            className: 'fab fa-lg fa-github',
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: "/docs/all-versions",
                label: "All versions",
              },
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: '#',
          //     },
          //     {
          //       label: 'Discord',
          //       href: '#',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: '#',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/uptane',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uptane.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
