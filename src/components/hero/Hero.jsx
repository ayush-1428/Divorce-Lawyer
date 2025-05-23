import React from 'react'
import './hero.css'

import {motion} from 'motion/react'

const Hero = () => {
  return (
    <div className='AniminateFromBottom hero'>
        <div className='hero_cont'>

            <motion.div className='hero-content'

              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}
              transition={{
                duration: 1,
                
              }}

            >
            <p className='hero-text-heading hero-normal textRightToLeftC' >Hello, I’m </p>
            <p className='hero-text-heading hero-name textRightToLeftC' >Advocate Manju Prajapati </p>
            <p className='hero-text-heading hero-normal textRightToLeftC' >Delighted to assist you with your family law matters </p>
            <p className='hero-text-heading hero-style textRightToLeftC' >Dedicated to Divorce Law & Justice with Compassion </p>
            </motion.div>


            <motion.div className='here-button'
            
            
              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}
              transition={{
                duration: 1,
                
              }}

> 
                            <a href="tel:+91964382511">
                <button className='button2Connect'>[ Contact Us ]</button>
              </a>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero