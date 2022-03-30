import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import Heading from './Heading'
import Hero from './Hero'
import Navi from './Navi'
import Projects from './Projects'
import Resume from './Resume'

export default function App() {
   
  return (
    <div>
    <Navi />
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/Work' element={<Projects />} />
      <Route path='/Resume' element={<Resume />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer />
  </div>
  )
}
