import React from 'react';
import templates from "../Assets/templates.jpg";
import format from "../Assets/format.jpg";
import build from "../Assets/build.jpg";
import stand from "../Assets/standout.jpg"
import "./Advantages.css";


function Advantages() {
  return (
    <div>
        <h1 id='why-us'>Why us?</h1>
        <section id='templates'>
            <div id='wordings'><p><span id="numbers">100+</span> built-in resume templates... you can just <span id='highlight'>click</span> and <span id='highlight'>use</span> it</p></div>
            <div id='vectors'>
               <img src={templates} alt="templates"/>
            </div>
        </section>
        <section id='formats'>
            <div id='vectors'>
            <img src={format} alt="format"/>
            </div>
            <div id='wordings'>
                <p>get your resume in <span id='highlight'>all formats...</span> </p>
            </div>
        </section>
        <section id='build-resume'>
            <div id='wordings'><p><span id='highlight'>bored</span> of the templates? don't worry... you can build your resume from <span id='highlight'>scratch!</span></p></div>
            <div id='vectors'>
               <img src={build} alt="build"/>
            </div>
        </section>
        <section id='stand-out'>
            <div id='vectors'>
            <img src={stand} alt="stand-out"/>
            </div>
            <div id='wordings'>
                <p>stand out from others... and get <span id='highlight'>hired</span> </p>
            </div>
        </section>
    </div>
  )
}

export default Advantages;