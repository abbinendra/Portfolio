import { useState , useEffect} from 'react'
import Logo from './assets/pfpp.png'
import './App.css'
import Icons from "./icons.jsx"
import Mrq from './Marquee.jsx'

function App() {

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".maintxt").classList.add("done-typing");
    }, 5000);
  }, []);

  return (
    <div className='frstpg'>
      <div className='hero'>
        <img src={Logo} className="logo" alt="Vite logo" />
        <div className="maintxt1">
          <span className='res1'><span className='welcome'>Welcome to</span>
          <span className='myname'> Abhinendra<span className='surname'> Pratap Singh</span>'s</span></span>
          <span className='maintxt'>Portfolio</span>
        </div>
      </div>
      <Icons />
      <Mrq />
    </div>
  )
}

export default App
