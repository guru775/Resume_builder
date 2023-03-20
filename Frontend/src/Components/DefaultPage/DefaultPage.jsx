import React from 'react';
import "./DefaultStyle.css";
import Navbar from './Navbar/Navbar';
import show from "./Assets/office.jpg";
import work from "./Assets/work.jpg";
import Advantages from './Advantages/Advantages';
import Faq from './FAQ/Faq';
import Templates from './Templates/Templates';


function DefaultPage() {
  
  return (
    <div>
      <section className='main-section'>
        <div id='nav-holder'>
         <Navbar/>
         </div>
         <div id='home-section'>
          <section id='title-info'>
            <h1><span id='title-1'>Resume</span> Builder</h1>
            <p><span id='title-1'>Build</span> your resume, and get <span id='title-1'>hired</span>.</p>
            <div id='support-image'>
              <img src={work} alt="work-show"/>
            </div>
          </section>
          <section id='show-info'>
            <img src={show} alt="show-logo"/>
          </section>
         </div>
         <div id='about-section'>
         {/* <img src={profile} alt="profile"/> */}
         <Advantages/>
         </div>
         <div id='contact-section'>
          <Faq/>
         </div>
         <div id='testimonials-section'>
          <Templates/>
         </div>
         <div id='templates-section'></div>

      </section>
    </div>
  )
}

export default DefaultPage;