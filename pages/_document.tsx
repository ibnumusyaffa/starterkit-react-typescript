/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="/theme.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
