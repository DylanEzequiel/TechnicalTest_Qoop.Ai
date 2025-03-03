import React, { useState } from 'react'
import Validatior from './validation/formvalidation';

function ContactForm():React.ReactElement {

    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formData,setFormData]= useState({
        name:"",
        email:"",
        body:""
    })
    const [errors,setErrors]= useState({
        name:"",
        email:"",
        body:""
    })
    const hasErrors = !!errors.name || !!errors.email || !!errors.body;

    function handleSubmit() {
        setSubmitted(true)
    }

    function handleChange(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const newData = {...formData, [event.target.name]: event.target.value }
        setFormData({...newData})
        const values = Validatior(newData)
        setErrors({...values})
    }
  return (
      <div>
        {submitted ? (
            <p className="font-semibold text-green-500"> Your message has been sent successfully!</p>
        )
        :
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
              <label className="block font-medium text-gray-800 dark:text-white text-lg">Name</label>
              <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
                  placeholder="John Doe"
                  required
                  />
                      <p className='font-bold text-[#ff8801] text-md'>{errors.name}</p>
          </div>
          <div>
              <label className="block font-medium text-gray-800 dark:text-white text-lg">Email</label>
              <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email} 
                  className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
                  placeholder="johndoe@example.com"
                  required
                  />
                      <p className='font-bold text-[#ff8801] text-md'>{errors.email}</p>

          </div>
          <div>
              <label className="block font-medium text-gray-800 dark:text-white text-lg">Message</label>
              <textarea
                  name="body"
                  onChange={handleChange}
                  value={formData.body}
                  className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
                  rows={4}
                  maxLength={2500}
                  placeholder="Write your message here"
                  required
                  ></textarea>
                      <p className='font-bold text-[#ff8801] text-md'>{errors.body}</p>

          </div>
          <button
              type="submit"
                      className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-orange-600 px-4 py-2 rounded-xl w-max font-semibold text-white transition duration-100"
              disabled={hasErrors}
              >
              Send Message
          </button>
      </form>
              }
        </div>
  )
}

export default ContactForm