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
    // console.log(path)
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
                <Link to="/" className='site-title'>Jamie Lai</Link>
                {isAuthenticated ?
                    <ul className='menu'>
                        <CostomLink href="/Resume">Resume</CostomLink>
                        <CostomLink href="/Projects">Projects</CostomLink>
                        <CostomLink href="/Blogs">Blogs</CostomLink>
                        <CostomLink href="/CreateDiary">Create Diary</CostomLink>

                    </ul>
                    :
                    <ul className='menu'>
                        <CostomLink href="/Resume">Resume</CostomLink>
                        <CostomLink href="/Projects">Projects</CostomLink>
                        <CostomLink href="/Blogs">Blogs</CostomLink>
                        <CostomLink href="/Login">Login</CostomLink>
                    </ul>
                }

                <div className='social-links'>
                    <a><FontAwesomeIcon className="social-links-icons" icon={faFacebookSquare} /></a>
                    <a><FontAwesomeIcon className="social-links-icons" icon={faInstagramSquare} /></a>
                    <a><FontAwesomeIcon className="social-links-icons" icon={faGithubSquare} /></a>
                    <a><FontAwesomeIcon className="social-links-icons" icon={faLinkedin} /></a>
                    {isAuthenticated && <a href="" onClick={logout}><FontAwesomeIcon className="social-links-icons" icon={faRightFromBracket} /></a>}
                </div>
            </div>
        </div>
    )
}

export default Header