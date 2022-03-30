import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./Images/LOGO.png"
export default function Navi() {
  return (
    <div className='container2'>
        <div className="first">
            <a href="/"><img src={Logo} alt="" height="70" width="70"/></a>
        </div>
        <div className="second">
            <Link to='/'>Home</Link>
            <Link to='/Work'>Work</Link>
            <Link to='/Resume'>Resume</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    </div>
  )
}
