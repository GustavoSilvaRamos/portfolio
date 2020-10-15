import { Hero, Portfolio, Footer, Sidebar, AboutMe } from '../components'
import Head from 'next/head'
import React from 'react'

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
          <AboutMe />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </>
  )
}
