import React from 'react'
import {motion} from "motion/react"

function HeroSection():React.ReactElement {
  return (
    <div id='Home' className='z-40 relative bg-orange-200 dark:bg-[#192d3d] h-max duration-500'>
      <div className='top-0 right-0 z-40 absolute bg-yellow-400 dark:bg-white/80 shadow-amber-300 shadow-lg dark:shadow-white rounded-full w-40 h-40'></div>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className='top-0 z-0 absolute bg-orange-200 dark:bg-[#192d3d] w-full max-w-[1400px] h-full md:h-max overflow-hidden'
      >
        <rect x="0" y="0" className='fill-orange-200 dark:fill-[#192d3d] w-full max-w-[1400px] h-full overflow-hidden translate-y-[calc(100%)] lg:translate-y-0' />

        <motion.path
          d="M0 421L21.5 419.7C43 418.3 86 415.7 128.8 412.5C171.7 409.3 214.3 405.7 257.2 395.5C300 385.3 343 368.7 385.8 364.3C428.7 360 471.3 368 514.2 370.5C557 373 600 370 642.8 377.7C685.7 385.3 728.3 403.7 771.2 402.8C814 402 857 382 878.5 372L900 362L900 601L0 601Z"
          fill="#4dad65"
          initial={{ y: 0 }}
          animate={{ y: [10, 0, 10] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full translate-y-[calc(100%)] lg:translate-y-0"
        />

        <path
          d="M0 422L21.5 421.7C43 421.3 86 420.7 128.8 422.2C171.7 423.7 214.3 427.3 257.2 428.5C300 429.7 343 428.3 385.8 432.3C428.7 436.3 471.3 445.7 514.2 450.7C557 455.7 600 456.3 642.8 456.7C685.7 457 728.3 457 771.2 458.5C814 460 857 463 878.5 464.5L900 466L900 601L0 601Z"
          fill="#6bd36e"
          className="w-full translate-y-[calc(100%)] lg:translate-y-0"
        />
      </svg>

      <main className='z-10 relative flex h-[1200px]'>
        <article className='flex flex-col gap-4 pt-30 lg:pt-50 pl-4 lg:pl-20 text-pretty'>
          <h1 className='font-semibold text-4xl lg:text-6xl'>Eco Charge</h1>
          <h2 className='font-medium md:text-xl'>We provide sustainable solar solutions to keep you connected anywhere, anytime.</h2>
          <button onClick={() => console.log("click")} className='bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-4 py-2 rounded-full w-max font-semibold text-white'>See More</button>
        </article>
      </main>
    </div>
  )
}

export default HeroSection