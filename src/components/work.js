import React from "react";
import "./ProjectCard.css";
import ProjectCard from "./ProjectCard"
import ProjectCardData from "./workCardData";

const Work  = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">
                projects
            </h1>
            <div className="project-container">
                {ProjectCardData.map((val,ind) =>{
                    return (
                        <ProjectCard 
                            key = {ind}
                            img = {val.img}
                            title = {val.title}
                            text = {val.text}
                            url = {val.url}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Work;