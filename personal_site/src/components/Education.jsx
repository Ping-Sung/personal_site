import React from 'react'
import NCHU from '../assets/NCHU_Badge.png'
import NUTC from '../assets/NUTC_Badge.png'


function Education() {

    const education = [
        {
            school: 'National Chung Hsing University',
            degree: 'Master of Business Administration in Management Information System',
            date: 'Sept. 2020 – Jun. 2022',
            gpa: '4.18 / 4.3',
            badge: NCHU
        },
        {
            school: 'National Taichung University of Sci. and Tech.',
            degree: 'Bachelor of Information Management<br />Associate Degree of Information Management',
            date: 'Sept. 2013 – Jun. 2020',
            gpa: '3.98 / 4.0',
            badge: NUTC
        }
    ]
    function renderEducation() {
        return education.map((edu) => {
            return (
                <div className="home-degree-content">
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
                        {/* {edu.degree.split('<br />').map((line, index) => (<p key={index}>{line}</p>))} */}

                        {edu.degree} <br />
                        GPA: {edu.gpa}
                    </div>
                </div>
            )
        })
    }


    return (
        <>
            <div className="home-title">
                <h3>Education</h3>
            </div>

            {renderEducation()}
        </>

    )
}

export default Education