import React from 'react'
import { SiGumtree } from 'react-icons/si'
import ResponsiveNavbar from './ResponsiveComp/ResponsiveNavbar'
import { HiOutlineSun } from 'react-icons/hi';
import { BsMoonStars } from 'react-icons/bs';

function NavBar():React.ReactElement {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
  return (
    <header className='z-50 fixed flex flex-row justify-between items-center bg-gray-700/30 shadow-2xl shadow-black backdrop-blur-xl p-2 w-full h-12'>

      <div className='flex justify-start w-1/3' onClick={darkModeHandler}>
        {dark ? (
          <HiOutlineSun size={30} className='hover:text-green-500 active:text-green-500 hover:rotate-6 active:rotate-180 transition-all duration-200' />
        ) : (
          <BsMoonStars size={30} className='hover:text-green-500 active:text-green-500 rotate-2 hover:rotate-6 active:rotate-180 transition-all duration-200' />
        )}
      </div>

      <div className='flex justify-center w-1/3'>
        <SiGumtree size={30} className='hover:text-green-500 active:text-green-500 transition-all duration-200' />
      </div>

      <div className='flex justify-end w-1/3'>
        <ul className='hidden lg:flex flex-row font-semibold text-black dark:text-white'>
          <li className='p-2 hover:text-green-500 hover:underline transition-all duration-200'>
            <a href="#Home">Home</a>
          </li>
          <li className='p-2 hover:text-green-500 hover:underline transition-all duration-200'>
            <a href="#Feats">Feats</a>
          </li>
          <li className='p-2 hover:text-green-500 hover:underline transition-all duration-200'>
            <a href="#Clients">Clients</a>
          </li>
          <li className='p-2 hover:text-green-500 hover:underline transition-all duration-200'>
            <a href="#Pricing">Pricing</a>
          </li>
        </ul>
      </div>

      <ResponsiveNavbar />

    </header>

  )
}

export default NavBar