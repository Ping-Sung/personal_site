/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import '../css/home.css'
// import profileImg from '../assets/Small.jpeg'
import Education from './Education'
import Projects from './Projects'
import Academic from './Academic'

// import profileImg from 'https://drive.google.com/file/d/1Vere1yIeTlLz2d3ZiC816bvkQu7lm-Rv/view?usp=drive_link'

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className='home-text'>
          <p>
            A recent Management Information System Graduate with 3+ years of experience in software development,
            2+ years of experience in AI research and AI-based application development.
            Adept at utilizing Laravel, Django, and ReactJS to deliver innovative solutions.

          </p>
        </div>
        <Education />
        <Projects />
        <Academic />




      </div>
    </div>

  )
}

export default Home