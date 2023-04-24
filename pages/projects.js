import React from 'react'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

function projects() {
  return (
    <>
      <Head>
        <title>Blog </title>
      </Head>
      <Navbar />
      <div className="h-screen bg-[#010912]">
        <h1 className="text-center text-6xl text-white py-[200px]">coming soon...</h1>
      </div>
      <Footer />
    </>
  )
}

export default projects