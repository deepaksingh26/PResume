import React from 'react'
import Logo from "./Images/LOGO.png"
import image2 from './Images/image2.png'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5 from './Images/image5.png'
export default function Footer() {
  return (
    <div className="mt-5" style={{background:'#2C2C2C'}}>
      <div className='d-flex align-items-center' style={{border:'solid 2px #2c2c2c',width:'40%',background:'#fff',marginLeft:'15%'}}>
          <div>
             <img src={Logo} alt="" height="75%" width="75%"/>
          </div>
          <div className='d-flex flex-column'>
          <h2 style={{ fontSize:"2em",marginTop:"0.5em",marginLeft:"0.4em"}}>Prachi Raj Tiwari</h2>
               <div style={{marginBottom: "0.8em"}} className="d-flex align-items-center">
                    <a href="https://www.behance.net/prachirajtiwari1"><img src={image2} alt="" className='ico mx-2'/></a>
                    <a href="https://www.linkedin.com/in/prachi-raj-tiwari-571954156/"><img src={image3} alt="" className='ico mx-2' /></a>
                    <a href="mailto: prachirajtiwari.work@gmail.com"><img src={image4} alt="" className='ico mx-2' /></a>
                    <a href="https://www.instagram.com/prachirajtiwari/" className='ico mx-2'><img src={image5} alt=""/></a>
                </div>
          </div>
      </div>
      {/* <div className="inner_footer">
        <div className="left_footer">
         <img src={Logo} alt="" height="70" width="70"/>
        </div>
        <div className="right_footer">
          <h2 style={{
            fontSize:"2em"
          }}>Prachi Raj Tiwari</h2>
          <div className="icons">
                    <a href="https://www.behance.net/prachirajtiwari1"><img src={image2} alt="" className='ico'/></a>
                    <a href="https://www.linkedin.com/in/prachi-raj-tiwari-571954156/"><img src={image3} alt="" className='ico' /></a>
                    <a href=""><img src={image4} alt="" className='ico' /></a>
                    <a href="https://www.instagram.com/prachirajtiwari/"><img src={image5} alt="" className='ico'/></a>
                </div>
        </div>
      </div> */}
    </div>
  )
}
