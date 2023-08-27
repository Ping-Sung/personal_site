/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
// import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { Link, useResolvedPath, useMatch, useNavigate } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
function CostomLink({ href, children, ...prop }) {
    const path = useResolvedPath(href)

    const isActive = useMatch({ path: path.pathname, end: false })
    return (
        <div className='menu-link'>
            <li className={isActive ? "actived" : ""}>
                <Link to={href} {...prop}>
                    {children}
                </Link>
            </li>
        </div>
    )

}

function Header() {

    const [isAuthenticated, setIsAuthenticated] = React.useState(null);
    const loggedInUser = localStorage.getItem("authenticated");
    const socialAccountUrls = {
        facebook: 'https://www.facebook.com/profile.php?id=100001397914168',
        instagram: 'https://www.instagram.com/kevin5970403/',
        github: 'https://github.com/Ping-Sung',
        linkedin: 'https://www.linkedin.com/in/kevincheng840925/',
    }

    const navigate = useNavigate();

    React.useEffect(() => {

        if (loggedInUser) {
            setIsAuthenticated(loggedInUser);
        }
    }, []);

    function logout() {
        localStorage.clear();
        navigate("/");

    }

    return (
        <div className='header'>
            <div className='header-content'>
                <div className="header-upper">
                    <Link to="/"><h2>Kevin Cheng</h2></Link>
                    <h3>Full-Stack Developer <br />& AI Researcher</h3>
                    <p>Laravel | Django | React | Pytorch, looking for (paid/unpaid) internship and entry level (Full-stack, AI) software engineer role.</p>

                    {isAuthenticated ?
                        <ul className='menu'>
                            <CostomLink href="/Resume">Resume</CostomLink>
                            <CostomLink href="/Academic">Academic</CostomLink>
                            <CostomLink href="/Projects">Projects</CostomLink>
                            {/* <CostomLink href="/Blogs">Blogs</CostomLink> */}
                            {/* <CostomLink href="/CreateDiary">Create Diary</CostomLink> */}

                        </ul>
                        :
                        <ul className='menu'>
                            <CostomLink href="/Resume">Resume</CostomLink>
                            <CostomLink href="/Academic">Academic</CostomLink>
                            <CostomLink href="/Projects">Projects</CostomLink>
                            {/* <CostomLink href="/Blogs">Blogs</CostomLink> */}
                            {/* <CostomLink href="/Login">Login</CostomLink> */}
                        </ul>
                    }
                </div>


                <div className='social-links'>
                    <a href={socialAccountUrls.facebook} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="social-links-icons" icon={faFacebookSquare} /></a>
                    <a href={socialAccountUrls.instagram} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="social-links-icons" icon={faInstagramSquare} /></a>
                    <a href={socialAccountUrls.github} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="social-links-icons" icon={faGithubSquare} /></a>
                    <a href={socialAccountUrls.linkedin} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="social-links-icons" icon={faLinkedin} /></a>
                    {isAuthenticated && <a href="" onClick={logout}><FontAwesomeIcon className="social-links-icons" icon={faRightFromBracket} /></a>}
                </div>
            </div>
        </div>
    )
}

export default Header