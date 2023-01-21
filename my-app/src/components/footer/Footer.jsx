import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div>
    <div className="background">
    <div className="connection">
    <h2>Ready to Work?</h2>
    <p>Want to start a Project? Branding, Website or Franchise, lets create something awesome together <b>Connect on WhatsApp.</b></p>
    <a className="but">Start a project.</a>
    </div>
    </div>
    <div className="footer">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="stars4"></div>
    <div className="container">
        <div  className="cont1">
            <div className="info">
    <img src="images/polardotlogo2.png" alt=""/>
    <p>Brand-Identity, Web-Design, Restaurant Franchise, Company Profile, Social Media and more.</p>
    <div className="details">
    <span>Kulharia Complex, 106, Ashok Rajpath, Patna, Bihar 800004</span>
    
    <span>Call us: +91 90451 87480</span>
    <span>E-mail us: hello@polardot.in</span>
    </div>
    
            </div>
            <div className="soc">
            <h4>Social</h4>
            <span>Google Page</span>
    <span>Facebook</span>
    <span>Instagram</span>
    <span>Behance</span>
  
            </div>
            <div className="com">
            <h4>Company</h4>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>S+UM Architect and Interior Designer</span>
            <span>FAQs</span>
            

            </div>
            <div className="sub">
            <h4>Subscribe</h4>
<span>Subscribe to  get the latest news from us</span>
<input type="text" placeholder="Enter Email" name="email"  className="mail" required/>
<button><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
        <div className="foot">
         <span>© 2019-2022 PolarDot. All Right Reseved</span>
         
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer