import React from 'react'
import "./Faq.css";
import faq from "../Assets/faq.jpg";

function Faq() {
  return (
    <div className='faq-body'>
        <section id='faq-container'>
            
        </section>
        <section id='faq-show'>
            <h1>Frequently Asked <span id="highlight">Questions ? </span></h1>
           <img src={faq} alt="faq"/>
        </section>
    </div>
  )
}

export default Faq;