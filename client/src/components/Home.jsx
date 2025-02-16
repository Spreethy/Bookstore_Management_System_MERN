import React from 'react'
import '../css/Home.css'

function Home() {
  return (
    <div className ='hero'>
        <div className='hero-content'>
            <h1 className='hero-text'>Book Shop</h1>
            <p className='hero-description'>
            Explore our curated collection of the most popular and intriguing books.
            We're confident you'll discover the perfect read!
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home