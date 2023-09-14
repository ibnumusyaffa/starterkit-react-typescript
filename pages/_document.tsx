import { Head, Html, Main, NextScript } from 'next/document'

function Theme() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var preferredTheme = localStorage.getItem('theme')
            ? localStorage.getItem('theme')
            : ''
            document.documentElement.className = preferredTheme
          })();
        `,
      }}
    ></script>
  )
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Theme />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
