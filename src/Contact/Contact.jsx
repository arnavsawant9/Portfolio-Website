// import React from 'react'
// import SoldierModel from '../About/SoldierModel'

// const Contact = () => {
//   return (
//     <>
//     <h1 className="text-4xl text-white font-bold text-center pt-10">Contact Me</h1>
//     <div className='flex p-5'>
//       <div className='w-full md:w-1/2 rounded-lg shadow-lg p-5'>
//         <SoldierModel />
//       </div>
//       <div className='w-full md:w-1/2 rounded-lg shadow-lg gap-4 justify-center items-center'>
//         <input type="text" placeholder="Name" className="block p-2 mt-4 rounded bg-gray-800" />
//         <input type="email" placeholder="Email" className="block p-2 mt-4 rounded bg-gray-500" />
//         <input type="text" placeholder="Message" className="block p-2 mt-4 rounded bg-gray-300" />
//       </div>
//     </div>
//     </>
//   )
// }

// export default Contact







import React from 'react';
import EarthModel from './EarthModel';

const Contact = () => {
  return (
    <div className="min-h-screen text-white pt-10">
      <h1 className="p-1 pt-20 pb-10 text-white text-3xl md:text-5xl font-bold text-center">Contact me!!</h1>

      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-16 pb-10">
        {/* Earth Model */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-black rounded-xl shadow-xl flex justify-center items-center">
          <EarthModel />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 rounded-xl shadow-xl p-6 text-black flex flex-col justify-center">
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="p-3 rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="p-3 rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
            <textarea 
              placeholder="Message" 
              rows={5} 
              className="p-3 rounded bg-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
            <button 
              type="submit" 
              className="mt-2 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
