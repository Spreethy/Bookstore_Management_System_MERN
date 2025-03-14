import React from 'react'
import '../css/Home.css'
import axios from 'axios';
import { useEffect } from 'react';

function Home({setRole}) {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
    .then(res => {
      if(res.data.login){
        setRole(res.data.role)
      }else{
        setRole()
      }

    }).catch(err => console.log(err))
  }, [])
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