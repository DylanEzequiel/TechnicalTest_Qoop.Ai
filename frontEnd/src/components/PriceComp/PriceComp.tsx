import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import {motion} from "motion/react"
import { toast } from 'react-toastify';

interface IPriceComp{
    title:string,
    price:string,
    desc:string,
    characteristics:string[],
    bestseller:boolean
}

function PriceComp({title,price,desc,characteristics,bestseller}:IPriceComp):React.ReactElement {
    function handleClick(){
        toast.success(`${title} Plan!`)
    }
  return (
    <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        className='group relative flex flex-col gap-4 bg-white/80 dark:bg-gray-600/80 shadow-gray-600/40 shadow-lg hover:shadow-lg dark:shadow-gray-300/40 backdrop-blur-xl p-4 rounded-lg max-w-80 font-semibold hover:scale-105 duration-200'>
          {bestseller && <div className='top-4 -right-6 z-40 absolute bg-orange-500 shadow-md px-3 py-1 rounded-lg font-bold text-white text-xs rotate-45'>
              Most Popular
          </div> }
        <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-3xl' > {title}</h3>  
            <i className='text-sm'>{price}/month </i>
            <p className='text-sm'>{desc}</p>
        </div>
        <div>
            <button onClick={handleClick} className='bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-4 py-2 rounded-full w-max font-semibold text-white duration-100'>Get Started</button>
        </div>
        <ul className='h-full text-end'>
            {characteristics.map((element)=>{
            return( 
                <li className='flex flex-row items-center gap-2'>
                    <FiCheckSquare /> <span> {element}  </span>
                </li>)
            })}
        </ul>
    </motion.div>
  )
}

export default PriceComp