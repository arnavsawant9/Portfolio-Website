import React from 'react'
import email from "./assets/email.png"
import github from "./assets/github.png"
import instagram from "./assets/instagram.png"
import linkedin from "./assets/linkedin.png"
import twitter from "./assets/twitter.png"

const Footer = () => {
  return (
    <div className='bg-[#191919] p-5 flex gap-10 justify-center items-center'>
      <img src={email} className='w-14 h-14'/>
      <img src={github} className='w-10 h-10'/>
      <img src={instagram} className='w-10 h-10'/>
      <img src={linkedin} className='w-10 h-10'/>
      <img src={twitter} className='w-10 h-10'/>
    </div>
  )
}

export default Footer
