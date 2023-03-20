import React from 'react'
import "./Templates.css";
import docs from "../Assets/docs.jpg";

function Templates() {
  return (
    <div id='templates-show'>
        <section id='docs-show'>
            <img src={docs} alt="documents"/>
        </section>
        <section id='auto-show'>
            
        </section>
    </div>
  )
}

export default Templates;