import React, { useState } from "react";
import "./review.scss";

const Review = () => {

    const [review,fillreview]=useState("")
    const [reviewer,fillreviewer]=useState("")
    const [link,fillink]=useState("")
    const [subtext,fillsubtext]=useState("")

    function fillreview1(){
        fillreview("Love that each component is handmade customised. Great work!")
        fillreviewer("Shawarma Tales")
        fillink("@shawarmatales")
        fillsubtext("Restaurant/Takeaways")
    }
    function fillreview2(){
        fillreview("Impressed with master class support of the team and really look forward for the future. Really,really well made! Love that each component is handmade and customised. Great Work!")
        fillreviewer("Tommy Reaves")
        fillink("@shawarmatales")
        fillsubtext("CEO Founder")
    }
    function fillreview3(){
        fillreview("Impressed with master class support of the team and really look forward for the future. Really,really well made! Love that each component is handmade and customised. Great Work!")
        fillreviewer("Tommy Reaves")
        fillink("@shawarmatales")
        fillsubtext("Restaurant/Takeaways")
    }
    function fillreview4(){
        fillreview("Impressed with master class support of the team and really look forward for the future. Really,really well made! Love that each component is handmade and customised. Great Work!")
        fillreviewer("Tommy Reaves")
        fillink("@shawarmatales")
        fillsubtext("CEO Founder")
    }



    

    function animation1(){
        document.getElementById('cir1').className='c1'
        document.getElementById('cir2').className='circle2'
        document.getElementById('cir3').className='circle3'
        document.getElementById('cir4').className='circle4'
        
    }

    function animation2(){
        document.getElementById('cir1').className='circle1'
        document.getElementById('cir2').className='c2'
        document.getElementById('cir3').className='circle3'
        document.getElementById('cir4').className='circle4'
        
    }
    function animation3(){
        document.getElementById('cir1').className='circle1'
        document.getElementById('cir2').className='circle2'
        document.getElementById('cir3').className='c3'
        document.getElementById('cir4').className='circle4'
        
    }
    function animation4(){
        document.getElementById('cir1').className='circle1'
        document.getElementById('cir2').className='circle2'
        document.getElementById('cir3').className='circle3'
        document.getElementById('cir4').className='c4'
        
    }
    return (
        <div className="reviewSection">
            <div className="reviewHead">
                What Our Clients Say
            </div>
            <div className="carousel">
                <div className="firstrev">
                    <div className="reviewone"><i>{review}</i></div>
                    <br>
                    </br>
                    <font size="16px" className="reviewer">{reviewer} <a href="" className="link">{link}</a></font>
                    <div className="subtext">{subtext}</div>
                </div>

                

        </div>
        <div className="fourcircles">
                    <div className="circleborder1"><div className="circle1" id="cir1" onClick={fillreview1}><img src="images/02.png" onClick={animation1} ></img></div></div>
                    <div className="circleborder2"><div className="circle2" id="cir2" onClick={fillreview2}><img src="images/02.png" onClick={animation2}></img></div></div>
                    <div className="circleborder3"><div className="circle3" id="cir3" onClick={fillreview3}><img src="images/02.png" onClick={animation3}></img></div></div>
                    <div className="circleborder4"><div className="circle4" id="cir4" onClick={fillreview4}><img src="images/02.png" onClick={animation4}></img></div></div>
                </div>

        </div>
    )
}

export default Review