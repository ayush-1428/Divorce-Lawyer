import React from 'react'
import './about.css'
import about from '../../assets/data/about/about.png'

const About = () => {
  return (
    <div className='about animinateAbout' id='about'>


        <div className='about_cont'>
                    <br />
        <br />
        <br />

        <h1 className="about_text">About Us</h1>
        <br />
        
        <br />
        <br />
        <br />


                <section className='aboutse_section'>

                    <div className='image_here'><img src={about} className='imag_about' alt="" /></div>

                    <article className='text_article'>

                      <h2 className='heading_article'>Driven by Justice. <br /><br /> Grounded in Trust.</h2>

<br />
<br />
Practice Location: Surajpur Court, Greater Noida – Chamber No. 117, Gali No. 4
<br />
<br />

Advocate Manju Prajapati offers trusted, results-driven legal representation in family and civil matters. We guide individuals through emotionally and legally complex situations with clarity and compassion.

Our mission is to make the legal process understandable and effective — protecting your rights, listening to your needs, and building legal strategies tailored to your case.

We handle a wide range of issues including divorce, custody, criminal defense, and civil disputes, committed to integrity, empathy, and delivering meaningful outcomes.

                    </article>

                </section>

        </div>

    </div>
  )
}

export default About