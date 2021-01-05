import {
  Hero,
  Portfolio,
  Footer,
  Sidebar,
  AboutMe,
  Contact,
} from '../components'
import Head from 'next/head'
import React from 'react'

export default function Index() {
  return (
    <>
      <Head>
        <title>Gustavo Silva</title>
      </Head>
      <div>
        <div className="bar">
          <Sidebar />
        </div>
        <div className="min-h-screen page-container">
          <Hero />
          <AboutMe />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
