import "./navbar.css"
import {FaBars, FaTimes} from "react-icons/fa";

import React, { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () =>{

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    const [scroll, setScroll] = useState(false);
    const handlescroll = () =>{
        if(window.scrollY >= 100){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    };

    window.addEventListener("scroll", handlescroll);

    return (
        <div className = {scroll ? "header header-bg" : "header"}>
            <Link to = "/"> 
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "Nav-menu active":"Nav-menu"}>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/project">Project</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size = {20} style = {{color: "aliceblue"}}/>
                ):(
                    <FaBars size = {20} style = {{color: "aliceblue"}}/>
                )}
            </div>
        </div>
    )
}

export default Navbar