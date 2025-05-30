import React from 'react'

const Navbar = () => {
  return (
    <div className='p-5 bg-gray-800 flex w-full justify-center'>
      {/* <div className='h-10 w-10 rounded-full'>
        <img src={taylor} />
      </div> */}
      <div className='flex justify-center'>
        <button className='text-lg text-white px-6 hover:text-red-500'>Home</button>
        <button className='text-lg text-white px-6 hover:text-red-500'>About Me</button>
        <button className='text-lg text-white px-6 hover:text-red-500'>Projects</button>
        <button className='text-lg text-white px-6 hover:text-red-500'>Contact</button>
        <button className='text-lg text-white px-6 hover:text-red-500'>Resume</button>
      </div>
    </div>
  )
}

export default Navbar
