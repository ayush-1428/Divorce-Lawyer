import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero_cont'>

            <div className='hero-content'>
            <p className='hero-text-heading hero-normal' >Hello, I’m </p>
            <p className='hero-text-heading hero-name' >Advocate Manju Prajapati </p>
            <p className='hero-text-heading hero-normal' >Delighted to assist you with your family law matters </p>
            <p className='hero-text-heading hero-style' >Dedicated to Divorce Law & Justice with Compassion </p>
            </div>


            <div className='here-button'> 
                            <a href="tel:+91964382511">
                <button className='button2Connect'>[ Contact Us ]</button>
              </a>
            </div>

        </div>
    </div>
  )
}

export default Hero