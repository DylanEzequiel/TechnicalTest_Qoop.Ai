import React from 'react'
import { Rate } from "antd";
import { motion } from "motion/react"

interface ITestimonyComp{
    id:number,
    name:string
    email:string
    body:string

}

function TestimonyComp({id,name,email,body}:ITestimonyComp):React.ReactElement {
  return (
      <motion.div
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{once:true}}
            key={id.toString()}
            className="flex-col items-start gap-4 bg-white/90 dark:bg-gray-700 shadow-gray-500 shadow-lg dark:shadow-gray-700 mx-auto p-4 rounded-lg w-full max-w-lg text-left">
            <div className='flex flex-row justify-between items-center gap-4'>
                <div className="flex justify-center items-center bg-blue-500 rounded-full w-12 h-12 font-bold text-white text-lg">
                        {name.charAt(0).toUpperCase()}
                </div>
              <Rate disabled defaultValue={(Math.floor(Math.random() *100/5 ))}/>
            </div>

            <div className="flex flex-col justify-end items-start">
                <b className="font-semibold text-lg">{name}</b>
                <i className="text-gray-500 dark:text-gray-400 text-sm">{email}</i>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{body}</p>
            </div>
      </motion.div>
  )
}

export default TestimonyComp