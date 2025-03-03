import React from 'react'
import {motion} from "motion/react"
import ContactForm from '../../components/ContactForm/ContactForm';


function Contact():React.ReactElement {
  

  return (
    <motion.main 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center px-4 py-16">
      <header>
        <h3 className="font-semibold text-gray-800 dark:text-white text-4xl text-center">
          Contact Our Team
        </h3>
      </header>

      <article className="group relative flex md:flex-row flex-col items-center gap-6 bg-white/30 shadow-gray-600/40 shadow-lg hover:shadow-lg dark:shadow-gray-300/40 mt-10 p-6 rounded-lg w-full max-w-4xl duration-200">
        <div className="w-full md:w-1/2">
          <ContactForm/>
        </div>
        <aside className="flex justify-center w-full md:w-1/2">
          <img
            className="w-96 h-96"
            src="https://www.engelmann.de/wp-content/uploads/2023/04/Bild-Kontaktformular.svg"
            alt="Contact Illustration"
          />
        </aside>
      </article>
    </motion.main>
  )
}

export default Contact