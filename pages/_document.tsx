import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
              <link rel="stylesheet" href="https://cdn.phipsiart.at/leberkasrechner-assets/css/tabler.min.css" />
              <script src="https://cdn.phipsiart.at/leberkasrechner-assets/js/bootstrap.min.js" defer></script>
        <script src='https://cdn.phipsiart.at/leberkasrechner-assets/js/tabler.min.js' defer></script>
      <Head />
      <body className='theme-codensed theme-light'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
