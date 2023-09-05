/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../css/home.css'
// import profileImg from '../assets/Small.jpeg'
import Education from './Education'
import Projects from './Projects'
import Academic from './Academic'


// import profileImg from 'https://drive.google.com/file/d/1Vere1yIeTlLz2d3ZiC816bvkQu7lm-Rv/view?usp=drive_link'



function Home(props, innerRef) {

  return (
    <div className="home">
      <div className="home-content" ref={innerRef}>
        <div className='home-text'>

          <p>
            A recent Management Information System Graduate with 3+ years of experience in software development,
            2+ years of experience in AI research and AI-based application development.
            Adept at utilizing Laravel, Django, and ReactJS to deliver innovative solutions.
            <br /><br />
            During my time at WANIN International Co., Ltd., I played a pivotal role in backend development,
            database design, and workflow planning for an official platform. This involved utilizing
            PHP Laravel, MySQL, and GitBucket to ensure a seamless development and deployment process.
            <br /><br />
            I also have a track record of innovation, exemplified by my work in enhancing construction
            site safety through AI and computer vision. My responsibilities included training models for
            equipment detection and addressing server overload by implementing edge computing with Jetson
            Nano. I successfully led the training of a semantic segmentation model, contributing to improved
            worker safety.
            <br /><br />
            Throughout my academic journey, I thrived in part-time roles where I effectively managed teams
            dedicated to developing customized systems using Laravel. I collaborated closely with clients,
            oversaw project management, and expanded my skill set to encompass React, Django, and Flask
            while waiting for my compulsory military service in Taiwan. I am now seeking a full-time position
            where I can leverage my skills to deliver innovative solutions and contribute to the success of
            your organization.
          </p>
        </div>
        <Education ref={props.educationRef} />
        <Projects ref={props.projectsRef} />
        <Academic ref={props.academicRef} />
      </div>
    </div>

  )
}

export default React.forwardRef(Home)