import { DefaultSeo } from 'next-seo'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <DefaultSeo
            titleTemplate="Gustavo Silva"
            title="Gustavo Silva"
            description="Let's work together!"
            openGraph={{
              url: 'https://gustavosr.com.br/',
              title: 'Gustavo Silva',
              description:
                'Personal Portfolio developed for showing my works and developed content.',
              site_name: 'Gustavo Silva',
              images: [
                {
                  url: '/open-graph.png',
                },
              ],
            }}
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
