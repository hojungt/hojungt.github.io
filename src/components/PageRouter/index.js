// React
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from '../../pages/Home';
import Past from "../../pages/Past";
import Recent from "../../pages/Recent";
import NotFound from '../../pages/NotFound';

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

                <Route exact path="/recent-projects-view">
                    <Recent />
                </Route>

                <Route exact path="/past-projects-view">
                    <Past />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
            
        </HashRouter>
    )
}