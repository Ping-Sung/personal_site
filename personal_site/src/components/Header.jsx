import React from 'react'
import {Link, useResolvedPath, useMatch} from "react-router-dom"

function nav() {
    return (
        <nav className='nav'>
            <Link to="/" className='site-title'>Kevin's Site</Link>
            <ul>
                <CostomLink href = "/About">About</CostomLink>
                <CostomLink href = "/Resume">Resume</CostomLink>
            </ul>
        </nav>
    )
}


function CostomLink({href, children, ...prop}) {
    const path = useResolvedPath(href)
    // console.log(path)
    const isActive = useMatch({path: path.pathname, end:false})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={href} {...prop}>
                {children}
            </Link>
        </li>
    )

}

export default nav