import React from "react";
import {Link} from "react-router-dom";
import img1 from "../assets/code-944499_1280.jpg";
import img2 from "../assets/coding-1853305_1280.jpg";
import "./aboutContent.css";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Hi, I am a Computer Science student at the University of British Columbia interested in software, web, and ML development</p>
                <Link to = "/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src = {img1} className="img" alt = "This is a image"></img>
                    </div>
                    <div className="img-stack bottom">
                        <img src = {img2} className="img" alt = "This is a image"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;