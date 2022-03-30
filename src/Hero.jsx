import React from 'react'
import Profile from './Images/Profile.png'
import image2 from './Images/image2.png'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5 from './Images/image5.png'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Heading from './Heading'
export default function Hero() {
  return (
    <>
        <div className="container_hero">
            <div className="left">
                <h1 className='h_1'>HELLO</h1>
                <h1 className='h_2'>I'm Rishi Raj Tiwari</h1>
                <p>I consider myself a creative, open-minded and proactive person, who is up to use her bag full of creativity to the best of her capability.
                </p>
                <p>I'm currently pursuing masters of Design from SPA, Bhopal majoring in visual communication.</p>

                <div className="icons">
                    <a href="https://www.behance.net/prachirajtiwari1"><img src={image2} alt="" className='ico mx-2'/></a>
                    <a href="https://www.linkedin.com/in/prachi-raj-tiwari-571954156/"><img src={image3} alt="" className='ico mx-2' /></a>
                    <a href="mailto: prachirajtiwari.work@gmail.com"><img src={image4} alt="" className='ico mx-2' /></a>
                    <a href="https://www.instagram.com/prachirajtiwari/"><img src={image5} alt="" className='ico mx-2'/></a>
                </div>

            </div>
            <div className="right">
                <img src={Profile} alt="" style={{
                    "height": "75vh",
                    "width": "auto"
                }}/>
            </div>
        </div>
        <Heading head="Projects"/>
        <Projects />
        <Heading head="Contact me" />
        <Contact />
        </>
  )
}
