import React from "react";
import "./footer.css"
import {FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size = {20} style={{color:"aliceblue", marginRight:"2rem"}}/>
                        <div>
                            <p>3583 Kingsway</p>
                            <p>Vancouver, BC, Canada</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size = {20} style = {{color:"aliceblue", marginRight:"2rem"}} />
                        672-472-0205
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size = {20} style = {{color:"aliceblue", marginRight:"2rem"}} />
                        foramvpatel@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        Socials
                    </h4>
                    <p>
                        Happy to connect
                    </p>
                    <div className="social">
                        <Link to = "https://www.linkedin.com/in/foram-patel-470132222/">
                    <FaLinkedin size = {30} style = {{color:"aliceblue", marginRight:"1rem"}} />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;