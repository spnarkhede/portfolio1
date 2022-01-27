import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Resume from './components/Resume2';
import Thesis from './components/Thesis';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Certification from './components/Certification';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();
  return (

    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className="col-lg-9 app__main-content">
            {/* navbar */}
            <Navbar />

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/thesis">
                  <Thesis />
                </Route>
                <Route path="/technicalskills">
                  <TechnicalSkills />
                </Route>
                {/* <Route path="/projects" component={Projects} /> */}
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/certifications">
                  <Certification />
                </Route>
                
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;