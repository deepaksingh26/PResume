import React, { useState } from 'react'
import WORK from './Images/WORK.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function Contact() {
  const [data,setData]=useState({
    fName: "",
    email: "",
    msg: "",
  });
  const fire = (event) =>{
      const {name, value}= event.target;        //I have destructered the object wrong
      setData((preVal)=>{       
        return(
          {
            ...preVal,
            [name]: value,
          }
        )
      })
  }
  const SubmitEve = (eve) =>{
    eve.preventDefault()
    alert(`Welcome ${data.fName} ${data.lName} you have email address ${data.email} phone number ${data.phone} and you typed the following message ${data.msg}`)
  }
  return (
    <>
      <img src={WORK} alt="Let's work together" style={{height:"860px",
    width:"auto",
    marginTop: "-6em"}} />
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 ">
          <form onSubmit={SubmitEve}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label font-weight-bold">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name='fName' value={data.fName} onChange={fire} placeholder="Enter your first name" />
            </div>
            
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label font-weight-bold">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={fire} placeholder="name@example.com" />
            </div>
            
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label font-weight-bold">Message </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' value={data.msg} onChange={fire}></textarea>
            </div>

            <div className="col-12">
              <button className='btn btn-outline-dark' type='submit'>Submit</button>
            </div>

            <div className='col-12 mt-5'>
            If you have any questions, or want more information about working with me feel free to reach out to me at prachiraj.work@gmail.com
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
} 
