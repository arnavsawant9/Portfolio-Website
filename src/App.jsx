import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
//import About from "./About/About"
import ProfileHeader from './About/ProfileHeader'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ProfileHeader />
    </>
  )
}

export default App
