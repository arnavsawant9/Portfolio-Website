import React from 'react'
import ycombinator from "../assets/ycombinator.png"

const Projects = () => {
  return (
    <>
    <h1 className="p-1 pt-20 text-white text-3xl md:text-5xl font-bold text-center">My Projects!!</h1>
    <div className='p-5 pt-10 flex items-center gap-4 justify-center text-white'>
      <div className='w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg'>
        <h1 className='text-center text-2xl font-semibold pb-5'>Y - Combinator</h1>
        <p className='pb-5'>Y-Combinator is a prestigious startup accelerator founded in 2005. It has funded over 3,000 startups, including Airbnb, Dropbox, and Stripe, fostering innovation across various tech industries.</p>
        <img src={ycombinator} height={150} width={150} className='w-full'/>
        <div className='mt-4 flex gap-2'>
            <button className='w-full bg-red-500 w-1/2 text-center rounded-md'>Github</button>
            <button className='w-full bg-red-500 w-1/2 text-center rounded-md'>Demo</button>
        </div>
        <div className='mt-4 flex items-center justify-center gap-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" height={40} width={40} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height={40} width={40} />
        </div>
      </div>
      <div className='w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg'>
        <h1 className='text-center text-2xl font-semibold pb-5'>Y - Combinator</h1>
        <p className='pb-5'>Y-Combinator is a prestigious startup accelerator founded in 2005. It has funded over 3,000 startups, including Airbnb, Dropbox, and Stripe, fostering innovation across various tech industries.</p>
        <img src={ycombinator} height={150} width={150} className='w-full'/>
        <div className='mt-4 flex gap-2'>
            <button className='w-full bg-red-500 w-1/2 text-center rounded-md'>Github</button>
            <button className='w-full bg-red-500 w-1/2 text-center rounded-md'>Demo</button>
        </div>
        <div className='mt-4 flex items-center justify-center gap-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" height={40} width={40} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height={40} width={40} />
        </div>
      </div>
      <div className='w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg'>
        <h1 className='text-center text-2xl font-semibold pb-5'>Y - Combinator</h1>
        <p className='pb-5'>Y-Combinator is a prestigious startup accelerator founded in 2005. It has funded over 3,000 startups, including Airbnb, Dropbox, and Stripe, fostering innovation across various tech industries.</p>
        <img src={ycombinator} height={150} width={150} className='w-full'/>
        <div className='mt-4 flex gap-2'>
            <button className='w-full bg-red-500 w-1/2 text-center rounded-md'>Github</button>
            <button className='w-full bg-red-500 w-1/2 text-center rounded-md'>Demo</button>
        </div>
        <div className='mt-4 flex items-center justify-center gap-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" height={40} width={40} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height={40} width={40} />
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Projects
