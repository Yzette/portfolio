import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';


const Pages = () => (
    <div>
        <switch>
            <Route exact path="/">
                <Home />
            </Route>
        </switch>
    </div>

);

export default Pages;