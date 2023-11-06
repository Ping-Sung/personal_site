/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../css/home.css'
// import profileImg from '../assets/Small.jpeg'
import Education from './Education'
import Projects from './Projects'
import Academic from './Academic'
import SelfProjects from './SelfProjects'
import OtherExperience from './OtherExperience'
import selfiesmall from '../assets/Small.jpeg'

// import profileImg from 'https://drive.google.com/file/d/1Vere1yIeTlLz2d3ZiC816bvkQu7lm-Rv/view?usp=drive_link'



function Home(props, innerRef) {

  return (
    <div className="home">
      <div className="home-content" ref={innerRef}>

        <img src={selfiesmall} alt="" className='home-image' />



        <div className='home-text'>

          <p>
            Hi, I'm Kevin, a recent graduate in Management Information Systems. I have 3+ years of experience in software development,
            2+ years of experience in AI research and AI-based application development.
            Adept at utilizing Laravel, Django, and ReactJS to deliver innovative solutions.
            I am currently looking for a full-time position in software development.
            <br /><br />
            In addition, I have a deep passion for travel, exploring diverse cultures and landscapes. New destinations always pique my curiosity, and traveling has taught me how to adapt to different environments. Furthermore, playing chess is another one of my interests. This ancient strategy game has taught me to think strategically and plan for the long term.
          </p>
        </div>

        <Projects ref={props.projectsRef} />
        <SelfProjects ref={props.selfProjectsRef} />
        <OtherExperience ref={props.OtherExperienceRef} />
        <Education ref={props.educationRef} />
        <Academic ref={props.academicRef} />
      </div>
    </div>

  )
}

export default React.forwardRef(Home)