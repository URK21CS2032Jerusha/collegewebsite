import React from 'react'
import './Hero.css'
import dark_arrow from'../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>
            We ensure better education
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Dignissimos enim, mollitia nihil sint, maiores magni nam 
            dolor minus obcaecati illum suscipit quam vero 
            tempora ex corrupti aut voluptatem autem inventore!</p>
            <button className='btn'>Explore more <img src={dark_arrow}></img>
            </button>
      </div>
    </div>
  )
}

export default Hero
