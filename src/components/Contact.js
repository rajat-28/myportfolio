import React from 'react'
// import "../Form.css"

export default function Contact() {
  return (
    <div className='form' id="contact">
      <h1 className='text-center my-3'>Let Us Connect !</h1>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        {/* <label>Subject</label>
        <input type='text'></input> */}
        <label>Message</label>
        <textarea rows="6" placeholder='Type Your message'/>
        <button className='btn btn-dark'>Submit</button>
    </div>
  )
}
