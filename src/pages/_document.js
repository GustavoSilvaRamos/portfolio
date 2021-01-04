import { DefaultSeo } from 'next-seo'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta property="og:title" content="Gustavo Silva" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gustavosr.com.br/" />
          <meta
            property="og:image"
            content="http://gustavosr.com.br/open-graph.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://gustavosr.com.br/open-graph.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Hero image for Gustavo Silva Portfolio"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="GustavoSilva" />
          <meta
            property="og:description"
            content="Personal Portfolio developed for showing my works and developed content."
          />
          <link
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
