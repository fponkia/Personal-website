import React from "react";
import "./ProjectCard.css";
import code from "../assets/code-img.jpg";
import { NavLink } from "react-router-dom";

const ProjectCard  = (props) => {
    return (
        <div className="project-card">
                    <img src = {props.img} alt = "Project image"/>
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to = {props.url} className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
    )
};

export default ProjectCard;