import React from "react";

import { Link } from "react-router-dom";

import Overlay from "../ui/Overlay";

function About() {
    return (
        <Overlay>
            <h1>This is the About Page!</h1>
            <p>This page is all about myself and how I am learing React!</p>
            <p><Link to='/about/education'>Education</Link></p>
            <p><Link to='/about/experience'>Experience</Link></p>
            <p><Link to='/about/projects'>Projects</Link></p>
        </Overlay>
    );
}

export default About;