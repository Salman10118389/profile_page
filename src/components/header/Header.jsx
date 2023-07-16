import React, { useState } from 'react'
import "./header.css";
const Header = () => {
    const[Toggle, showMenu] = useState(true);      
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Salman</a>
            <div className="nav__menu" id="nav__menu">
                <ul className="nav__list">
                    <li className="nav_item">
                        <a href="#" className="nav__link"><i className="uil uil-estate nav__icon"></i> Home</a>                                                                                                                                            
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link"><i className="uil uil-user nav__icon"></i> About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link"><i className="uil uil-file-alt nav__icon"></i>Skills </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link"><i className="uil uil-briefcase-alt nav__icon"></i>Services </a>
                    </li>
                    <li className="nav__i">
                        <a href="#" className="nav__link"><i className="uil uil-scenery nav__icon"></i>Portofolio </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link"><i className="uil uil-message nav__icon"></i>Contact </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" nav__close onClick={() => { navMenu(Toggle); showMenu(!Toggle); }}></i>
            </div>

            <div className="nav__toggle">
                <i className="uil uil-apps" onClick={() => {navMenu(Toggle); showMenu(!Toggle);}}></i>
            </div>
        </nav>
    </header>    
  );  
}
async function navMenu(Toggle) {
    const menu = document.getElementsByClassName('nav__menu')[0];
    const logo = document.getElementsByClassName('nav__logo')[0];
    const menuBtn = document.getElementsByClassName('nav__toggle')[0];  
    if(Toggle === true) {
      console.log(Toggle);
      console.log(menu);
      menu.style.display = "block";

      logo.style.display = "none";
      menuBtn.style.display = "none";
    } else {
      console.log(Toggle)
      menu.style.display = "none";
      logo.style.display = "block";
      menuBtn.style.display = "block"
    }    
}


export default Header