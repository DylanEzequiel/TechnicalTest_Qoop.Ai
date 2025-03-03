import React, { ReactNode } from 'react'
import { motion } from "motion/react"
interface IFeatProp{
  title:string,
  description:string,
  children: ReactNode;
}

function FeatureComponent({ title, description, children }: IFeatProp):React.ReactElement {
  return (
      <motion.div initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }} className='group flex flex-col items-center gap-4 bg-white/40 dark:bg-gray-600/80 shadow-gray-600 shadow-md focus:shadow-lg hover:shadow-lg dark:shadow-gray-300 backdrop-blur-xl p-4 rounded-md rounded-b-sm w-60 hover:scale-105 active:scale-110 duration-200'>
          {children}
          <h3 className='font-semibold text-xl'>{title}</h3>
          <p className='text-md'>{description}</p>
      </motion.div>
  )
}

export default FeatureComponent