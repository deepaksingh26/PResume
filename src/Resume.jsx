import React, { useState } from 'react'
import ResumeP from './Images/ResumeP.jpg'
import downArrow from './Images/downArrow.png'
import upArrow from './Images/upArrow.png'
import PrachiResume from './Images/PrachiResume.jpg'
import Resumepdf from './Images/Resumepdf.pdf'

export default function Resume() {
  const [show,setShow]=useState(false);
  return (
    <div>
        <div style={{display:'flex',margin:'0px 30px',justifyContent:'space-between'}}>
             <div className='Rleft' >
               <h2 style={{fontWeight:"bold",marginRight:"3em"}}>RESUME</h2>
               <a className='download' href={Resumepdf} download><button style={{border:'none',marginRight:"4em"}}>Download now</button></a>
             </div>       
             <div>
               <img src={ResumeP} alt="" style={{width:'80%'}} />
               {show && <div>
                 <img src={PrachiResume} style={{height:'1000px',width:'80%'}}/>
               </div>}
                
               
               <div onClick={()=>setShow(!show)} style={{cursor:'pointer',width:'80%'}}>
                 {show?<div style={{display:'flex',justifyContent:'center'}}><img src={upArrow} alt="" style={{width: "0.6cm",height: "0.6cm"}} /></div>:<div style={{display:'flex',justifyContent:'center'}}><img src={downArrow} alt="" style={{width: "0.6cm",height: "0.6cm"}} /></div>}
                 <h3 style={{textAlign:'center',fontSize:"16px"}}>{show?"View less":"View More"}</h3>
              </div>

             </div>
        </div>

       
    </div>
  )
}
