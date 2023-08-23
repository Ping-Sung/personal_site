// import React from 'react'
import NCHU from '../assets/NCHU_Badge.png'
import NUTC from '../assets/NUTC_Badge.png'
import { forwardRef } from "react";


function Education(props, innerRef) {

    const education = [
        {
            school: 'National Chung Hsing University',
            degrees: ['Master of Business Administration in Management Information System'],
            degree: 'Master of Business Administration in Management Information System',
            date: 'Sept. 2020 – Jun. 2022',
            gpa: '4.18 / 4.3',
            badge: NCHU
        },
        {
            school: 'National Taichung University of Sci. and Tech.',
            degree: 'Bachelor of Information Management /n Associate Degree of Information Management',
            degrees: ['Bachelor of Information Management', ' Associate Degree of Information Management'],
            date: 'Sept. 2013 – Jun. 2020',
            gpa: '3.98 / 4.0',
            badge: NUTC
        }
    ]
    function renderEducation() {
        return education.map((edu, idx) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <div className="home-degree-content" key={idx}>
                    <div className="home-degree-content-image">
                        <a href="https://www.nchu.edu.tw/index1.php">
                            <img src={edu.badge} alt="NCHU image" />
                        </a>
                    </div>
                    <div className="home-degree-content-word">
                        <div className="home-degree-content-word-head">
                            <h5>{edu.school}</h5>
                            <p style={{ fontSize: 14 }} >{edu.date} </p>
                        </div>

                        {edu.degrees.map((degree, idx) => {
                            return (
                                <span key={degree.toString()}>{(idx == edu.degrees.length - 1 && idx > 0) && <span> & </span>}{degree}</span>
                            )
                        })}
                        <br />
                        GPA: {edu.gpa}
                    </div>
                </div>
            )
        })
    }


    return (
        <>
            <div className="home-title" ref={innerRef}>
                <h3>Education</h3>
            </div>

            {renderEducation()}
        </>

    )
}

export default forwardRef(Education)