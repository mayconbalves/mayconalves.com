
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Brasil Metal',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://mayconbalves.com.br/',
  baseUrl: '/',
  organizationName: 'mayconbalves',
  projectName: 'mayconbalves',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mayconbalves/mayconalves',
        },
        blog: {
          blogTitle: 'Heavy Metal Brasil',
          blogDescription: 'Blog dedicado ao melhor estilo de música que existe!',
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
          frontMatter.hide_reading_time
            ? undefined
            : defaultReadingTime({content}),
          editUrl: 'https://github.com/mayconbalves/mayconalves',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      metadata: [{name: 'twitter:card', content: 'summary'}],
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Brasil Metal',
        logo: {
          alt: 'Brasil Metal',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog/hard-rock', label: 'Hard Rock', position: 'left'},
          {to: '/blog/heavy-metal', label: 'Heavy Metal', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Brasil Metal - Todos os direitos.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
