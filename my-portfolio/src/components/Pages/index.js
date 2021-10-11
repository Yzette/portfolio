import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import WhoAmI from '../WhoAmI';
import Projects from '../Projects';
import ScrollToTop from '../../functions/scrollToTop';
import Experience from '../Experience';
import Cv from '../Cv';


const Pages = () => (
    <div>
        <Route >
            <ScrollToTop />
        </Route>
        <switch>
            <Route exact path="/cv">
                <Cv />
            </Route>
            <Route exact path="/experience">
                <Experience />
            </Route>
            <Route exact path="/projets">
                <Projects />
            </Route>
            <Route exact path="/qui-suis-je">
                <WhoAmI />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </switch>
    </div>

);

export default Pages;