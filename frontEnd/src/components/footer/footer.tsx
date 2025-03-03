import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer():React.ReactElement {
  return (
    <footer className='z-50 flex md:flex-row flex-col justify-between bg-[#192d3d] dark:bg-[#101c27] p-4 text-white'>
      <main className='md:w-[60%]'>
        <h3 className='text-xl'>EcoCharge</h3>
        <p className='px-2 pt-5'>At EcoCharge, we are committed to driving a greener future by providing innovative and sustainable energy solutions. Our mission is to make electric vehicle charging more accessible, efficient, and environmentally friendly. Whether at home, at work, or on the go, our smart charging stations and eco-friendly technologies help reduce carbon footprints and promote a cleaner planet.</p>
      </main>
      <aside>
        <ul className='flex flex-row justify-center items-center lg:gap-4'>
          <li className='p-2 w-max text-gray-400 hover:text-white hover:scale-110 duration-200'><a href="" className='text-2xl'><FaXTwitter></FaXTwitter></a></li>
          <li className='p-2 w-max text-gray-400 hover:text-white hover:scale-110 duration-200'><a href="" className='text-2xl'><FaInstagram/></a></li>
          <li className='p-2 w-max text-gray-400 hover:text-white hover:scale-110 duration-200'><a href="" className='text-2xl'><FaFacebookSquare/></a></li>
        </ul>
      </aside>
    </footer>
  )
}

export default Footer