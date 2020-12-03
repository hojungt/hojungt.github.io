// React
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from '../../pages/Home';
import RecentWorks from '../../pages/RecentWorks';
import SelectedWorks from '../../pages/SelectedWorks';
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

                <Route exact path="/recent-works">
                    <RecentWorks />
                </Route>

                <Route exact path="/selected-works">
                    <SelectedWorks />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
            
        </HashRouter>
    )
}