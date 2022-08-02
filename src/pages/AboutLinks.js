import React from 'react';

import { Route } from 'react-router-dom';

import Overlay from '../ui/Overlay';
import AboutEducation from "./about/About_Education";
import AboutExperiences from "./about/About_Experiences";
import AboutProjects from "./about/About_Projects";


function AboutLinks() {
    return (
        <Overlay>
            <Route path='/about/education'>
                <AboutEducation />
            </Route>
            <Route path='/about/experience'>
                <AboutExperiences />
            </Route>
            <Route path='/about/projects'>
                <AboutProjects />
            </Route>
        </Overlay>
    );
}

export default AboutLinks;