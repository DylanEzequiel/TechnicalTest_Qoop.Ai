import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer():React.ReactElement {
  return (
    <footer className='flex md:flex-row flex-col justify-between bg-[#192d3d] p-4 text-white'>
      <main className='md:w-[60%]'>
        <h3 className='text-xl'>EcoCharge</h3>
        <p className='px-2 pt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ea vero corporis, commodi nemo veritatis laudantium doloremque vitae nam aliquid nihil porro libero culpa facere quidem, aperiam sed non quas.</p>
      </main>
      <aside>
        <ul className='flex flex-row lg:flex-col justify-center items-center lg:gap-4'>
          <li className='p-2 w-max'><a href="" className='text-2xl'><FaXTwitter></FaXTwitter></a></li>
          <li className='p-2 w-max'><a href="" className='text-2xl'><FaInstagram/></a></li>
          <li className='p-2 w-max'><a href="" className='text-2xl'><FaFacebookSquare/></a></li>
        </ul>
      </aside>
    </footer>
  )
}

export default Footer