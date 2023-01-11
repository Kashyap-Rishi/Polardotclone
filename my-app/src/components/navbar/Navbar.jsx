
import {useState} from "react"
import "./navbar.scss"

const Navbar = () => {
 
    const[isScrolled, setIsScrolled]=useState(false);

    window.onscroll=() =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
    return() => (window.onscroll==null);
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
    <div className="container">
        <div className="left">
            <img src="images/polardotimage-1.png" alt =""/>
            

           

        </div>
        <div className="right">
            
        <span>About Us</span>
           
            
            
           <span>Our Services</span>
          
           <span>Works</span>
           <span>Gallery</span>
           <span>FAQs</span>
           
           <button class="btn"></button>
        
        </div>
        
    </div>
    </div>
  )
}

export default Navbar;