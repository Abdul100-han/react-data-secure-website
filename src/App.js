import React from 'react'
import Nabvar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Find from './components/find/Find'
import Driver from './components/driver/Driver'
import Luxury from './components/luxury/Luxury'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Nabvar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  )
}

export default App