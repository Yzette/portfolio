import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import WhoAmI from '../WhoAmI';


const Pages = () => (
    <div>
        <switch>
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