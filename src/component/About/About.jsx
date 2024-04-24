import React from 'react'
import NavBar from '../NavBar'
import './About.css';
import img2 from '../../assets/image/img2.jpg'

const About = () => {
  return (
    <div>
      <NavBar/>
      <div>
       <img src={img2} className='bg-image d-block w-100 height-300'/>
       </div>
      <div className="bg-image"></div>

     <div className="bg-text">
        
       <h1>About Us </h1>
       <p>Know More About Us </p>
       
     </div>
     
      </div>
    
    
  )
}

export default About
