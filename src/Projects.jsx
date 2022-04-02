import React from 'react'
import { Link } from 'react-router-dom'
import Works from './api'
export default function Projects() {
  return (
    <>
    {/*<h1>Hello</h1>
    <div style={{display:'flex',border:'solid 2px white',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}} className="contain1">
        {
            Works.map((val,ind)=>{
                return(
                    <div style={{border:'solid 2px white',width:"45%",marginBottom: "1em"}}>
                    <a href={val.to}>
                    <div style={{position:'relative',width:'50%'}}>
                    <img src={val.imgsrc} style={{width:'100%',height:'450px'}}  className="ankit" alt="Avatar"/>
                    </div>
                    <div style={{position:'absolute',left:'40%'}}>
                    <button style={{backgroundColor:'red',color:'white',border:'none',padding:'10px 20px',zIndex:'100'}}>sexyy</button>
                    </div>
                    </a>
                    </div>
                   
                )
            })
        }
      </div> */}
      
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',}} className="project">
           {Works.map((val,ind)=>{
             return(
              <div style={{position:'relative',width:'48%'}} className="aaja my-2">
                  <a href={val.to}><img src={val.imgsrc}  style={{width:'100%',height:'500px'}} /></a>
                  <div  className="chutiya">
                     <button style={{padding:'10px 30px',backgroundColor:'#2c2c2c',color:'white',border:'none'}}>{val.name}</button>
                  </div>
               </div>
             )

           })}
      </div>
      
    </>
  )
}
