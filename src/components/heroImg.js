import React from "react";
import "./heroImg.css";
import background from "../assets/background.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src = {background} alt = "background img" />
            </div>
            <div className="content">
                <h1>
                    Hi, I am a Software Developer
                </h1>
                <div>
                    <Link to = "/project" className="btn">Project</Link>
                    <Link to = "/about" className=" btn btn-light">About</Link>
                </div>
            </div>
        </div>
    )
};

export default HeroImg;