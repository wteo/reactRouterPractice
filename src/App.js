import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './pages/Header';
import Welcome from './pages/Welcome';
// import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Overlay from './ui/Overlay';

const About = React.lazy(() => import('./pages/About'));

const AboutEducation = React.lazy(() => import('./pages/about/About_Education'));
const AboutExperiences = React.lazy(() => import('./pages/about/About_Experiences'));
const AboutProjects = React.lazy(() => import('./pages/about/About_Projects'));

// import AboutEducation from './pages/about/About_Education';
// import AboutExperiences from './pages/about/About_Experiences';
// import AboutProjects from './pages/about/About_Projects';

export const url = {
  about: "about",
  product: "product",
  welcome: "welcome",
  contact: "form"
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<Overlay><p>Loading...</p></Overlay>}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome'/>} />
          <Route path={`/${url.welcome}`} element={<Welcome />} />
          <Route path={`/${url.about}/`} element={<About/>}>
              <Route path='education' element={<AboutEducation />} />
              <Route path='experience' element={<AboutExperiences />} />
              <Route path='projects' element={<AboutProjects />} />
          </Route>
          <Route path={`/${url.contact}`} element={<Contact/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
