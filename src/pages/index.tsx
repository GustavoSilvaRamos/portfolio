import { Hero, Portfolio, Footer, Sidebar } from '../components'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Gustavo Silva</title>
      </Head>
      <div>
        <Sidebar />
        <div className="min-h-screen page-container">
          <Hero />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </>
  )
}
