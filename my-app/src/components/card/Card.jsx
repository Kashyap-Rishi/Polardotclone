import React from 'react'
import './card.scss'
import CardItems from '../cardItems/CardItems'
const Card = () => {
  return (
    <div className="maincard" >
    <CardItems 

    header="We build Powerful Brands✨
"  image="images/polardotcard3updated.png"
   title="Create a Brand to STAND OUT!"
   desc="We create designs that wins. Resonating company’s personality and values with customers and nurtures relationships to gain a competitive edge in digital world."
    />
    <CardItems
    header="We create Pratical Strategies to win 🏆"
    image="images/polardotcard1updated.png"  
   title="Visual Identity and Structure"
   desc="Attract more attention with compelling designs for your business, promotion and social media."
    />
    <CardItems
        header="Connect with Technology 🌐"
        image="images/polardotcard2updated.png" 
        title="Immersive Brand Eco-System"
        desc="Brand specific Web Design with complete UI/UX. To create your ideal Brand Eco-System."
    />
    </div>
  )
}

export default Card