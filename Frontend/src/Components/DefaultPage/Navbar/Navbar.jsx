import React, {useState} from 'react'
import "./Navbar.css";
import data from "./NavbarData.js";

function Navbar() {
    const [elements, setElements] = useState(data);

    const select = (id) => {
       const clickedElement = elements.filter((item) => {
        if(item.id === id){
            item.isActive = true;
        return item;
        }else{
            item.isActive = false;
        return item;
        }
       });
       setElements(clickedElement);
    }
  return (
    <div className='navbar-body'>
        {elements.map((item) => {
            return(
                <div key={item.id}>
                <button id={item.isActive === true ? "active": null} onClick={() => select(item.id)}><a style={{color: item.isActive === true ? "white": "black"}} href={item.path}>{item.name}</a></button>
            </div>
            )
        })}
    </div>
  )
}

export default Navbar;