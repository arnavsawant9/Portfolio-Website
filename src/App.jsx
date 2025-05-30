// https://www.figma.com/design/Rb5EqEvttDRMItR5wW7yCH/Developer-Portfolio-Website-Design-(Community)?node-id=0-1&p=f&t=59HGAMMdrKyMR978-0

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
//import About from "./About/About"
import ProfileHeader from './About/ProfileHeader'
import TimeLine from './TimeLine'
import Footer from './Footer'
import Projects from './Projects/Projects'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ProfileHeader />
      <TimeLine />
      <Projects />
      <Footer />
    </>
  )
}

export default App
