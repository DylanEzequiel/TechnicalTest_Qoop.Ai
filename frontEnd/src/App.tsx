import React from 'react'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import HeroSection from './views/heroSection/heroSection'
import Pricing from './views/pricing/pricing'
import Testimonys from './views/testimonys/testimonys'
import Features from './views/Features/Features.tsx'
import Contact from './views/contact/contact.tsx'
// import ParallaxSection from './components/bgComponent.tsx'

function App():React.ReactElement {


  return (
    <div className='flex flex-col items-center bg-orange-200 dark:bg-[#192d3d] w-full min-h-screen text-gray-700 dark:text-white'>
      <NavBar/>
      <main className='z-40 max-w-[1400px]'>
            <HeroSection/>
            {/* <ParallaxSection/> */}
            <Features/>
            <Testimonys/>
            <Pricing/>
            <Contact/>  
          </main>
      <Footer/>
    </div>
  )
}

export default App
