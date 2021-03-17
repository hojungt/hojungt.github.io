// React
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import WorkGroundcycle from '../../pages/WorkGroundcycle';

// Components
import NavAnimated from '../../components/NavAnimated';


export default function PageRouter() {
    return (
        <HashRouter>
            <NavAnimated />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/groundcycle">
                    <WorkGroundcycle />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
            
        </HashRouter>
    )
}