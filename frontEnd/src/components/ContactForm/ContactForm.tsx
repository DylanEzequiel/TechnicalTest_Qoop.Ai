import React from 'react'

function ContactForm():React.ReactElement {
  return (
      <form className="space-y-4 mt-4">
          <div>
              <label className="block font-medium text-gray-800 dark:text-white text-lg">Name</label>
              <input
                  type="text"
                  name="nameSender"
                  className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
                  placeholder="John Doe"
                  required
              />
          </div>
          <div>
              <label className="block font-medium text-gray-800 dark:text-white text-lg">Email</label>
              <input
                  type="email"
                  name="emailFrom"
                  className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
                  placeholder="johndoe@example.com"
                  required
              />
          </div>
          <div>
              <label className="block font-medium text-gray-800 dark:text-white text-lg">Message</label>
              <textarea
                  name="mensajeSender"
                  className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
                  rows={4}
                  placeholder="Write your message here"
                  required
              ></textarea>
          </div>
          <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-4 py-2 rounded-xl w-full font-semibold text-white transition duration-100"
          >
              Send Message
          </button>
      </form>
  )
}

export default ContactForm