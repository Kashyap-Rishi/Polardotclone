import React, { useState } from "react";
import "./service.scss"

const Services = () =>{
    
    
    function photochange1(){
        document.getElementById('changingimage').className='playanimation1'
        document.getElementById("changingimage").src="images/brand-identity.png";
        document.getElementById("first").style.backgroundColor="#E7F5FE"
        document.getElementById("firstheadid").style.borderColor="#E7F5FE"
        document.getElementById("second").style.backgroundColor="#fff"
        document.getElementById("secondheadid").style.borderColor="#fff"
        document.getElementById("third").style.backgroundColor="#fff"
        document.getElementById("thirdheadid").style.borderColor="#fff"
        document.getElementById("fourth").style.backgroundColor="#fff"
        document.getElementById("fourthheadid").style.borderColor="#fff"
        document.getElementById("fifth").style.backgroundColor="#fff"
        document.getElementById("fifthheadid").style.borderColor="#fff"
        

    }

    function photochange2(){
        document.getElementById('changingimage').className='playanimation2'
        document.getElementById("changingimage").src="images/graphic-design.png";
        document.getElementById("first").style.backgroundColor="#fff"
        document.getElementById("firstheadid").style.borderColor="#fff"
        document.getElementById("second").style.backgroundColor="#E7F5FE"
        document.getElementById("secondheadid").style.borderColor="#E7F5FE"
        document.getElementById("third").style.backgroundColor="#fff"
        document.getElementById("thirdheadid").style.borderColor="#fff"
        document.getElementById("fourth").style.backgroundColor="#fff"
        document.getElementById("fourthheadid").style.borderColor="#fff"
        document.getElementById("fifth").style.backgroundColor="#fff"
        document.getElementById("fifththheadid").style.borderColor="#fff"
    }

    function photochange3(){
        document.getElementById('changingimage').className='playanimation3'
        document.getElementById("changingimage").src="images/social-media.png";
        document.getElementById("first").style.backgroundColor="#fff"
        document.getElementById("firstheadid").style.borderColor="#fff"
        document.getElementById("third").style.backgroundColor="#E7F5FE"
        document.getElementById("thirdheadid").style.borderColor="#E7F5FE"
        document.getElementById("second").style.backgroundColor="#fff"
        document.getElementById("secondheadid").style.borderColor="#fff"
        document.getElementById("fourth").style.backgroundColor="#fff"
        document.getElementById("fourthheadid").style.borderColor="#fff"
        document.getElementById("fifth").style.backgroundColor="#fff"
        document.getElementById("fifththheadid").style.borderColor="#fff"
        
        
    }

    function photochange4(){
        document.getElementById('changingimage').className='playanimation4'
        document.getElementById("changingimage").src="images/web-design.png";
        document.getElementById("first").style.backgroundColor="#fff"
        document.getElementById("firstheadid").style.borderColor="#fff"
        document.getElementById("fourth").style.backgroundColor="#E7F5FE"
        document.getElementById("fourthheadid").style.borderColor="#E7F5FE"
        document.getElementById("second").style.backgroundColor="#fff"
        document.getElementById("secondheadid").style.borderColor="#fff"
        document.getElementById("third").style.backgroundColor="#fff"
        document.getElementById("thirdheadid").style.borderColor="#fff"
        document.getElementById("fifth").style.backgroundColor="#fff"
        document.getElementById("fifthheadid").style.borderColor="#fff"
       

        
    }


    function photochange5(){
        document.getElementById('changingimage').className='playanimation5'
        document.getElementById("changingimage").src="images/print-packaging-design.png";
        document.getElementById("first").style.backgroundColor="#fff"
        document.getElementById("firstheadid").style.borderColor="#fff"
        document.getElementById("fifth").style.backgroundColor="#E7F5FE"
        document.getElementById("fifthheadid").style.borderColor="#E7F5FE"
        document.getElementById("second").style.backgroundColor="#fff"
        document.getElementById("secondheadid").style.borderColor="#fff"
        document.getElementById("fourth").style.backgroundColor="#fff"
        document.getElementById("fourthheadid").style.borderColor="#fff"
        document.getElementById("third").style.backgroundColor="#fff"
        document.getElementById("thirdheadid").style.borderColor="#fff"
     
        
    }

    
    return(
        <div className="addBackgroundImage">
        <div className="ServiceSection">
            <div className="ServiceHeading">Our Services</div>
            <div className="serviceSection">
                <div className="toggleservices">
                    <div className="firstService" id="first" onClick={photochange1}>
                        <div className="firstHeading" id="firstheadid">Brand Identity Design</div>
                        <div className="belowContent">Impactful Visual Design to attract more attention. With compelling Logo Design,Business Profile,Social Media presence and more</div>
                    </div>
                    <div className="secondService" id="second" onClick={photochange2}>
                        <div className="firstHeading" id="secondheadid">Graphic Design</div>
                        <div className="belowContent">Graphical asset tailored made for your brand/company</div>
                    </div>
                    <div className="thirdService" id="third" onClick={photochange3}>
                        <div className="firstHeading" id="thirdheadid">Social Media</div>
                        <div className="belowContent">Stay on top of the social game and reach more audience. With Post design,Ad Post, GIF and more.</div>
                    </div>
                    <div className="fourthService" id="fourth" onClick={photochange4}>
                        <div className="firstHeading" id="fourthheadid">Web Design</div>
                        <div className="belowContent">Get the best web-design for your online needs. With our web-design services you get minimum maintenance cost and maximum engangement</div>
                    </div>
                    <div className="fifthService" id="fifth" onClick={photochange5}>
                        <div className="firstHeading" id="fifthheadid">Print and Packaging Design</div>
                        <div className="belowContent">Give you brand the professional packaging it needs</div>
                    </div>
                </div>
                <div className="serviceImages">
                    <img src="images/brand-identity.png" width="648px" height="396px" id="changingimage"></img>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className="Collaborators">
            <div className="smallText">Brands we have <font color="orange">Collaborated with</font></div>
            <br></br>
            <div className="largeText">Our Recent Projects.</div>
            <div className="Projects">
                <div className="project1">
                    <div className="proj1img"><img src="images/space.png" width="350px" height="220px" className="proj"></img></div>
                    <div className="projhead">
                        Shawarma Tales - Restaurant/Takeaway Franchise
                    </div>
                    <div className="projdescrip">

                    Complete Design and Architect solution. In collaboration with S+UM Architecture.
                        
                    </div>
                </div>
                <div className="project2">
                    <div className="proj2img"><img src="images/st.png" width="350px" height="220px" className="proj"></img></div>
                    <div className="projhead">
                        The Halt - Restaurant Branding
                    </div>
                    <div className="projdescrip">

                    
                    Complete Design and Architect solution. In collaboration with S+UM Architecture.
                        
                        
                    </div>
                </div>
                <div className="project3">
                    <div className="proj3img"><img src="images/iibm.png" width="350px" height="220px" className="proj"></img></div>
                    <div className="projhead">
                        IIBM, Patna - Re-Branding and Print Design
                    </div>
                    <div className="projdescrip">
                    Re-Branding, Annual Magazines, Flyers and Print Design.   
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Services