import axios from 'axios'
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg';
import TestimonyComp from '../../components/Testimony/TestimonyComp';

interface IClientComment{

  body:string;
  email:string;
  id:number;
  name:string;
  postId:number;
}

function Testimonys():React.ReactElement {
  const [clientComment,setClientComments]=useState<IClientComment[] | []>([])
  const [isLoading,setIsLoading]=useState<boolean>(false)

  async function getTestimonies() {
    setIsLoading(true)
    try {
      const resultPost1 = await axios.get("https://jsonplaceholder.typicode.com//posts/1/comments")
      const resultPost2 = await axios.get("https://jsonplaceholder.typicode.com//posts/2/comments")
      setClientComments([...resultPost1.data,...resultPost2.data])

    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

    useEffect(()=>{
      getTestimonies()
},[])

  return (
    <article>
      <h2 className='pt-10 font-semibold text-4xl text-center'>Powering Lives, One Charge at a Time</h2>
      <main className='items-center py-20 w-full text-center'>
        {isLoading || clientComment.length<1 ?
         <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className='flex justify-center items-center m-auto w-12 h-12 text-blue-500'
          >
            <CgSpinnerTwo size={50}/>
          </motion.div> :
          <div className='flex flex-row flex-wrap gap-8 md:gap-4 p-4'>
            {clientComment.map(coment=>{
              return (
              <TestimonyComp id={coment.id} name={coment.name} email={coment.email} body={coment.body}/>
              )
            })}
          </div>  
        }
        
      </main>
    </article>
  )
}

export default Testimonys