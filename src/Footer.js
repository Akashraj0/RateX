import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer--img'>
            <img src={require('./Favlogo.png')} alt="footer-image"/>
        </div>
        <div className='Footer-hyper'>
            <p>Home</p>
            <p>About</p>
            <p>Contact Us</p>
        </div>
    </div>
  )
}

export default Footer