
import React from 'react'
import './cardItems.scss'
const CardItems = (props) => {



  return (
    <div className="card">
    <div className="card_body">

    <div className="title">
    {props.header}
    </div>
 
        
        <div className="image">
       <img src={props.image}  alt=""/>
        </div>
        <div className="card_title">
<h2>{props.title}</h2>
        </div> 
        <div className="card_desc">
       {props.desc}
        </div>       
    </div>
    </div>
  )
}

export default CardItems