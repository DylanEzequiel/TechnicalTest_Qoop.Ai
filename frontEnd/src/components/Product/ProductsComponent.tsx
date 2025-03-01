import React, { ReactNode } from 'react'
import {motion} from "motion/react"

interface IFeatProp{
  title:string,
  description:string,
  children: ReactNode;
}

function ProductsComponent({ title, description, children }: IFeatProp):React.ReactElement {
  return (
    <motion.div initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }} >
      <div className='group flex flex-col items-center gap-4 shadow-md shadow-orange-400 p-2 rounded-b-sm w-72 hover:-translate-y-2 duration-200'>
          {children}
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </motion.div>
  )
}

export default ProductsComponent