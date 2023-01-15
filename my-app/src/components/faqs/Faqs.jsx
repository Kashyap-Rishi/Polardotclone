//<a target="_blank" href="https://icons8.com/icon/CCznd7l86jtr/link">Link</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/1x1Iqo5dLHVW/down">Down</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
import React, { useState } from "react";
import "./faqs.scss";
import $ from 'jquery';


const Faq = () =>{


    const [text,setText]=useState("")
    function fillcard1(){
        setText("We build powerful Brands that wins. Complete Brand-Identity, Company/Brand Portfolio, Restaurant/Takeaway Franchise, Promotional Design, Web-Design, Online Business Profile, Investor Pitch and more. Connect with us to know more")
        setText2("")
        setText3("")
        
    }
    const [text2,setText2]=useState("")
    function fillcard2(){
        setText2("We provide complete solution for your next F&B idea with the best Design and Architecture team in Patna. Including Name, Niche, Market Study, Menus, Packaging and Brand Design along with brand-centric Architecture and Interior solution in collaboration with S+UM Architect and Interior Designer to get your idea turned into sucessful franchise.")
        setText("")
        setText3("")
    }
    const [text3,setText3]=useState("")
    function fillcard3(){
        setText3("We design and develop brand-centric Websites and Web services to get your business a competitive edge in digital world. We have created digital solution for Education, E-commerce, Brand Portfolio and many other sectors.")
        setText("")
        setText2("")
    }
    function removecard(){
        
        setText("")
        setText2("")
        setText3("")
        
        
    }
    return(
        <div className="FaqSection">
            <div className="leftside">
                <div className="Question">Frequently Asked <font color="#fd7028">Question</font><br/></div>
                <div className="Headingfaq"><h1>FAQs about Our work flow</h1></div>
                <div className="fadedtext">If you didn't find the answer you were looking for, please visit our Contact Page</div>
            </div>
            <div className="rightside">
                <div className="card1">
                    <img src="images/icon.png" className="connectionicon"></img>
                    <div className="Question1">What Services do you offer?</div>
                    <img src="images/downarrow.png" className="downarrow" id="arrow" onClick={text?removecard:fillcard1}></img>
                </div>
                <span className="card1span">{text}</span>
                
                <div className="card1">
                    <img src="images/icon.png" className="connectionicon"></img>
                    <div className="Question1">I want to open a Restaurant & Takeaway Franchise</div>
                    <img src="images/downarrow.png" className="downarrow2" onClick={text2?removecard:fillcard2}></img>
                </div>
                <span className="card1span">{text2}</span>
                <div className="card1">
                    <img src="images/icon.png" className="connectionicon"></img>
                    <div className="Question1">I want to develop and design my Website</div>
                    <img src="images/downarrow.png" className="downarrow3" onClick={text3?removecard:fillcard3}></img>
                </div>
                <span className="card1span">{text3}</span>
            </div>
        </div>
    )
}

export default Faq;