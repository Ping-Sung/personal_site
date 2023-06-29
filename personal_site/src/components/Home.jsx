/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import '../css/home.css'
import profileImg from '../assets/jamie_profile.jpg'

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        
        <div className='home-title'>
          <h1>Hi, I'm Jamie Lai</h1>
        </div>
        <div className='home-text'>
          <p>
          Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. 
          </p>
          
        </div>
        
      </div>
      <div className="home-img">
        <img src={profileImg} alt="profile image" />
      </div>
    </div>
    
  )
}

export default Home