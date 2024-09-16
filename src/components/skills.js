import React from "react";
import "./skills.css";
import Java from "../assets/java.png";
import JavaScript from "../assets/icons8-javascript-480.png";
import Python from "../assets/icons8-python-240.png";
import TypeScript from "../assets/icons8-typescript-480.png";
import GitHub from "../assets/github-mark-white.png";

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <h2>I have experience working with these Technologies</h2>

            <div className="skillsGrid">
                <img src = "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt = "The logo icon for c++"/>
                <img src = {Java} alt = "The logo icon for java"/>
                <img src = {JavaScript} alt = "The logo icon for JavaScript"/>
                <img src = {Python} alt = "The logo icon for Python" />
                <img src = {TypeScript} alt = "The logo icon for Typescript" />
                <img src = "https://www.php.net/images/logos/new-php-logo.png" alt = "The logo for PHP" />
                <img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <img src = "https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt = "The logo for MySQL"/>
                <img src = {GitHub} alt="The logo icon for GitHub" title="GitHub"/>
                <img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
            </div>
        </div>
    )
};

export default Skills;