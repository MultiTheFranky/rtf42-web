import type { NavbarItemType } from "astro-bootstrap";

export const AppConfig = {
  site_name: '42nd R.T.F',
  title: '42nd R.T.F',
  description: 'Web page for 42nd R.T.F',
  repository: 'https://github.com/MultiTheFranky/rtf42-web',
  author: 'Franky',
  authorURL: 'https://github.com/MultiTheFranky',
  locale_region: 'es_ES',
  locale: 'es',
  mainMenu: [
  { text: 'Home', href: '/' },
  { text: 'Getting Started', href: '/getting-started' },
  { text: 'Components', href: '/components'},
  { text: 'Custom Utilities', href: '/components#sideUtilities' },
  // {
  //   title: 'parent',
  //   subItems: [{ title: 'child', href: '/' }, { divider: true }, { title: 'child2', href: '/' }],
  // },
],
};
