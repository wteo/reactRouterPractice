import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './pages/Header';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import AboutLinks from './pages/AboutLinks';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/about/' exact>
          <About />
        </Route>
        <Route path='/about/:id' exact>
          <AboutLinks />
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
