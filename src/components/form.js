import React from "react";
import "./form.css";

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>Name</label>
                <input type = "text" placeholder="Your Name"></input>
                <label>Email</label>
                <input type = "text" placeholder="Email address"></input>
                <label>Subject</label>
                <input type = "text" placeholder="Subject"></input>
                <label>Text</label>
                <textarea rows={6} placeholder="Type your message here"></textarea>
                <button className="btn"> Submit</button>
            </form>
        </div>
    )
}

export default Form;