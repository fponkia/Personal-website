import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";
import AboutContent from "../components/aboutContent";

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading = "About Me" text = "Hi, I am a UBC CS Student"/>
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About