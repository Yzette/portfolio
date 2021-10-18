import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import WhoAmI from '../WhoAmI';
import Projects from '../Projects';
import ScrollToTop from '../../functions/scrollToTop';
import Experience from '../Experience';
import Error from '../Error';
import Cv from '../Cv';
// en attente de la construction de la page bonus
import JapanPictures from '../JapanPictures';


const Pages = () => (
    <div>
        <Route >
            <ScrollToTop />
        </Route>
        <Switch>
            <Route exact path="/projets">
                <Projects />
            </Route>
            <Route exact path="/qui-suis-je">
                <WhoAmI />
            </Route>
            <Route exact path="/projets">
                <Projects />
            </Route>
            <Route exact path="/experience">
                <Experience />
            </Route>
            <Route exact path="/cv">
                <Cv />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path='*'>
                <Error />
            </Route>
            
        </Switch>
    </div>

);

export default Pages;