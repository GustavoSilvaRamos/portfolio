import { Hero } from '../components/Hero'
import { Portfolio } from '../components/Portfolio'
import { Footer } from '../components/Footer'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Gustavo Silva</title>
      </Head>
      <div>
        <div className="min-h-screen">
          <Hero />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </>
  )
}
