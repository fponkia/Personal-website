import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";
import Form from "../components/form";


const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading = "Contact" text = "Happy to have a chat"/>
            <Form />
            <Footer />
        </div>
    )
}

export default Contact