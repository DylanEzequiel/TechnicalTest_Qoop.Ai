import React from 'react'
import { SiGumtree } from 'react-icons/si'
import ResponsiveNavbar from './ResponsiveComp/ResponsiveNavbar'

function NavBar():React.ReactElement {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
  return (
    <header className='z-50 fixed flex flex-row justify-between items-center bg-gray-700/30 shadow-2xl shadow-black backdrop-blur-xl p-2 w-full h-12'>
      <div className='' onClick={darkModeHandler}>
        <SiGumtree size={30} className='hover:text-green-500 active:text-green-500 transition-all duration-200'/>
      </div>

      <ul className='hidden lg:flex flex-row font-semibold text-black dark:text-white text-center'>
        <li  className='p-2 hover:text-green-500 hover:underline transition-all duration-200'> <a href="">Feats</a></li>
        <li  className='p-2 hover:text-green-500 hover:underline transition-all duration-200'> <a href="">Clients</a></li>
        <li  className='p-2 hover:text-green-500 hover:underline transition-all duration-200'> <a href="">Pricing</a></li>
      </ul>
      <ResponsiveNavbar/>
      
    </header>
  )
}

export default NavBar