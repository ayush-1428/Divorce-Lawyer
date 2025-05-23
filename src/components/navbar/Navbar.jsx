import React from 'react'
import './navbar.css'

import logo from '../../assets/data/logo.jpg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logoBox'>
            <div className='logo-bg'><img className='image_logo' src={logo} alt="" /></div>
            <h2 className='text-logo'>Adv. Manju Prajapati</h2>
        </div>

        <div className='navbar-items'>

            <div className='navbar-item'>

                
            <a href="/"><h1 className='navbar-item-text'>Home</h1></a>
            <a href="#about"><h1 className='navbar-item-text'>About</h1></a>
            <a href="/services"><h1 className='navbar-item-text'>Services</h1></a>

            </div>

            <div>
              <a href="tel:+91964382511">
                <button>[ Contact Us ]</button>
              </a>
            </div>
        </div>

        
    </nav>
  )
}

export default Navbar