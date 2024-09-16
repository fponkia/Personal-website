import React from "react";
import Navbar from "../components/navbar";
import HeroImg from "../components/heroImg";
import Footer from "../components/footer";
import Skills from "../components/skills";
import Work from "../components/work";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <Skills />
            <Work />
            <Footer />
        </div>
    )
}

export default Home