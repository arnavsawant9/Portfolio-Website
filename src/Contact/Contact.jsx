import React from 'react'
import SoldierModel from '../About/SoldierModel'

const Contact = () => {
  return (
    <>
    <h1 className="text-4xl text-white font-bold text-center pt-10">Contact Me</h1>
    <div className='flex p-5'>
      <div className='w-full md:w-1/2 rounded-lg shadow-lg p-5'>
        <SoldierModel />
      </div>
      <div className='w-full md:w-1/2 rounded-lg shadow-lg gap-4 justify-center items-center'>
        <input type="text" placeholder="Name" className="block p-2 mt-4 rounded bg-gray-800" />
        <input type="email" placeholder="Email" className="block p-2 mt-4 rounded bg-gray-500" />
        <input type="text" placeholder="Message" className="block p-2 mt-4 rounded bg-gray-300" />
      </div>
    </div>
    </>
  )
}

export default Contact
