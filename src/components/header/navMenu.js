import './header.css';

const menu = document.getElementsByClassName('nav__menu')[0];
const logo = document.getElementsByClassName('nav__logo')[0];
const menuBtn = document.getElementsByClassName('nav__toggle')[0];
export async function navMenu(Toggle) {  
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
  