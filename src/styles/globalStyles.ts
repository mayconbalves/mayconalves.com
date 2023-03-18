import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  // background: 251B37
  // color: FFECEF
  // link: FFCACA
  // nav and footer: 372948

  // neon color
  // background: 400D51
  // color: FF7777
  // link: 31E1F7
  // nav and footer: D800A6


  :root {
    --background-color: #0f172a;
    --primary-color: #ffffff;
    --title-color: #5c1d0f;
    --highlight-color: #121214;
    --link-highlight: #22d3ee;
    --link-color: #ffffff;
    --border-color: #5c1d0f;

    --footer-color: #0f172a;
    --navbar-color: #0f172a;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
    line-height: 1;
    font-size: 100%;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`
export default GlobalStyles
