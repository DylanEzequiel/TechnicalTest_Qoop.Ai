import React from 'react'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import HeroSection from './views/heroSection/heroSection'
import Pricing from './views/pricing/pricing'
import Testimonys from './views/testimonys/testimonys'
import Features from './views/Features/Features'

function App():React.ReactElement {


  return (
    <div className='flex flex-col w-full max-w-[1400px] h-screen min-h-screen text-gray-700 dark:text-white'>
      <NavBar/>
      <main className='bg-orange-200 dark:bg-[#192d3d]'>
            <HeroSection/>
            <Features/>
            <Testimonys/>
            <Pricing/>
          </main>
      <Footer/>
    </div>
  )
}

export default App
