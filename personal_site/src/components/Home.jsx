/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import '../css/home.css'
import profileImg from '../assets/Small.jpeg'
import NCHU from '../assets/NCHU_Badge.png'
import NUTC from '../assets/NUTC_Badge.png'

// import profileImg from 'https://drive.google.com/file/d/1Vere1yIeTlLz2d3ZiC816bvkQu7lm-Rv/view?usp=drive_link'

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        {/* <div className='home-title'>
          <h1>Kevin Cheng's Portfolio</h1>
        </div> */}
        <div className='home-text'>
          <p>
            A recent Management Information System Graduate with 3+ years of experience in software development,
            2+ years of experience in AI research and AI-based application development. 
            Adept at utilizing Laravel, Django, and ReactJS to deliver innovative solutions.
          </p>
        </div>
        <div className="home-degree">
          <h3>Education</h3>
        </div>
        <div className="home-degree-content">
          <div className="home-degree-content-image">
            <a href="https://www.nchu.edu.tw/index1.php">
            <img src={NCHU} alt="NCHU image" />
            </a>
            
          </div>
          <div className="home-degree-content-word">
            <div className="home-degree-content-word-head">
              <p>National Chung Hsing University</p>
              <p style={{ fontSize: 14 }} >Sept. 2020 – Jun. 2022 </p>
            </div>
            Master of Business Administration in Management Information System <br />
            GPA: 4.18 / 4.3
          </div>
        </div>
        <div className="home-degree-content">
          <div className="home-degree-content-image">
            <a href="https://www.nutc.edu.tw/">
              <img  src={NUTC} alt="NUTC image" />
            </a>
            
          </div>
          <div className="home-degree-content-word">
            <div className="home-degree-content-word-head">
              <p>National Taichung University of Sci. and Tech.</p>
              <p style={{ fontSize: 14 }} >Sept. 2013 – Jun. 2020 </p>
            </div>
            Bachelor of Information Management <br />
            Associate degree of Information Management <br />
            GPA: 3.98 / 4.0
          </div>
        </div>
      </div>
      {/* <div className="home-img">
        <img src={profileImg} alt="profile image" />
      </div> */}
    </div>

  )
}

export default Home