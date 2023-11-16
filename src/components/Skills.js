import React from 'react'
import react from '../assets/img/jreact.webp'
import js from '../assets/img/jjs.webp'
import tw from '../assets/img/jtw.webp'
import boot from '../assets/img/boot.png'



export default function Skills() {
  return (
    <div>
      <div className='mx-4 about skills' id="skills">
        <div className='left '>
          <h1>Who Am I</h1>
          <p className='my-2'>
            I'm 20 years old frontend developer, with 1+ year of experience in building modern and scaleable frontends with react js. I love to learn new technology and deliver successful projects.
            I have a keen interest in competitive programming and 2-star coder on leetcode.
            <br />
            <br />

            OPEN TO WORK!
          </p>
          <div className=' my-4'>
            <h1 className='skillstag'>Skills</h1>
            <div className='spics' >
              <div className='reactp'>
                <span className='sname'>ReactJs</span>
                <img src={react} alt="" className='reactpic mx-3' decoding='async' loading='lazy'></img>
              </div>  
              <div className='reactp'>
                <span className='sname'>Javascript</span>
                <img src={js} alt="" className='reactpic mx-3' decoding='async' loading='lazy'></img>
              </div>
              <div className='reactp'>
                <span className='sname'>Tailwind</span>
                <img src={tw} alt="" className='reactpic mx-3 ' decoding='async' loading='lazy'></img>
              </div>
              
            </div>
            

            

          </div>
        </div>
      </div>
    </div>

  )
}
