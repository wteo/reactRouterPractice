import React from "react";

import { Link, Outlet} from "react-router-dom";

import Overlay from '../ui/Overlay';

import { url } from "../App";

function About() {

    return (
        <Overlay>
            <h1>This is the About Page!</h1>
            <p>This page is all about myself and how I am learing React!</p>
            <p><Link to={`/${url.about}/education`}>Education</Link></p>
            <p><Link to={`/${url.about}/experience`}>Experience</Link></p>
            <p><Link to={`/${url.about}/projects`}>Projects</Link></p>
            <Outlet />
        </Overlay>
    );
}

export default About;