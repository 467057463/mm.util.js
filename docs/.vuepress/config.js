const sidebar = require('./api-sidebar');


module.exports = {
  title: 'mmUtil',
  description: 'mmUtil个人工具库',
  themeConfig: {
    logo: '/assets/img/logo.png',
    sidebar,
    sidebarDepth: 0,
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/number/add' },
      // {
      //   text: 'External',
      //   link: 'https://google.com',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    repo: '467057463/mm.util'
  },
  // markdown: {
  //   lineNumbers: true
  // },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ]
};
