import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function () {
              var preferredTheme = localStorage.getItem('theme')
                ? localStorage.getItem('theme')
                : ''
              document.body.className = preferredTheme
            })
          `,
        }}
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
