import React from "react";
import "./review.scss";

const Review = () => {

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
                    <div className="reviewone"><i>"Love that each component is handmadeand customised. Great work!"</i></div>
                    <br>
                    </br>
                    <font size="16px" className="reviewer">Shawarma Tales <a href="" className="link">@shawarmatales</a></font>
                    <div className="subtext">Restraunts and takeaways</div>
                </div>

        </div>
        <div className="fourcircles">
                    <div className="circle1" id="cir1"><img src="images/02.png" onClick={animation1} ></img></div>
                    <div className="circle2" id="cir2"><img src="images/02.png" onClick={animation2}></img></div>
                    <div className="circle3" id="cir3"><img src="images/02.png" onClick={animation3}></img></div>
                    <div className="circle4" id="cir4"><img src="images/02.png" onClick={animation4}></img></div>
                </div>

        </div>
    )
}

export default Review