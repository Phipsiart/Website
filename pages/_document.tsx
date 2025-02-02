import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.phipsiart.de/leberkasrechner-assets/css/tabler.min.css" />
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
          defer>
        </script>    
        <script 
          src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/js/tabler.min.js" 
          defer>
        </script>
      </Head>
      <body className="theme-condensed theme-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
