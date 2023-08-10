/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import '../css/home.css'
import profileImg from '../assets/jamie_profile.jpg'
// import profileImg from 'https://drive.google.com/file/d/1Vere1yIeTlLz2d3ZiC816bvkQu7lm-Rv/view?usp=drive_link'

function Home() {
  return (
    <div className="home">
      <div className="home-content">

        <div className='home-title'>
          <h1>Hi, I'm Jamie Lai</h1>
        </div>
        <div className='home-text'>
          <p>
            I am Jamie Lai, a passionate and driven computer science graduate student with a focus on practical applications.
            I will soon be pursuing a Master of Science degree in Computer Science at UC Santa Barbara. Through my past experiences,
            I have developed proficiency in Python, PHP, and JavaScript, as well as related frameworks and AI libraries.
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