import React, { useState } from 'react'
import { RiMenuUnfold2Line } from 'react-icons/ri'
import { motion } from "motion/react"
import { easeIn } from 'motion'

function ResponsiveNavbar():React.ReactElement {
    const [render, setRender] = useState<boolean>(false)
  return (
    <div className='lg:hidden'>
            <div onClick={() => setRender(!render)} className='hover:cursor-pointer'>
              <RiMenuUnfold2Line size={30} className='self-center hover:text-green-500 active:text-green-500 transition-all duration-200'/>
            </div>
            {render?
            <>
              <ul className='lg:hidden top-14 right-2 z-50 absolute flex flex-col bg-white rounded-md w-24 overflow-hidden text-black'>
                  <motion.li 
                    initial={{ y: 50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: .1 }} 
                    className='hover:bg-blue-300 active:bg-blue-300 p-2 transition-all duration-200'> 
                      <a href="#Feats">Feats</a>
                  </motion.li>

                  <motion.li 
                    initial={{ y: 50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: .1 }} 
                    className='hover:bg-blue-300 active:bg-blue-300 p-2 transition-all duration-200'>
                      <a href="#Clients">Clients</a>
                  </motion.li>
                  
                  <motion.li 
                    initial={{ y: 50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: .1 }} 
                    className='hover:bg-blue-300 active:bg-blue-300 p-2 transition-all duration-200'> 
                      <a href="#Pricing">Pricing</a>
                  </motion.li>
                  
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={easeIn}
                className={`fixed inset-y-0 right-0 top-12 z-40 w-screen h-screen backdrop-blur-xs bg-gray-300/10  shadow-lg`}
                onClick={() => setRender(false)}
              />
            </>
            :null}
          </div>
  )
}

export default ResponsiveNavbar