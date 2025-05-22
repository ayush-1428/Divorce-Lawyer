import React from 'react'
import './whyjs.css'

const Why = () => {

    const points = [
    {
      title: "Clear Legal Guidance",
      description: "We simplify the legal process so you can act with confidence.",
    },
    {
      title: "Results-Focused Approach",
      description: "Your goals guide our strategy — always.",
    },
    {
      title: "Start With Confidence",
      description: "No stress. Just clarity, support, and action from day one.",
    },
  ];


  return (
    <div className='why' id='whyus'>

        <section className='why_cont'>
            <br />
            <br />
            <br />

        <h1 className="why_Text">Why Us</h1>
    
    <br />
    <br />
    <br />
    <br />





<div className="whyus_section">
      <div className="whyus_cards">
        {points.map((item, index) => (
          <div className="whyus_card" key={index}>
            <h3 className="whyus_card_title">{item.title}</h3>
            <p className="whyus_card_desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>







        </section>
    </div>
  )
}

export default Why