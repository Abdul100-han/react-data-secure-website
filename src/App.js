import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Data from './components/data/Data'
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
       <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </div>
  )
}

export default App