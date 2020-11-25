// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from '../../pages/Home';
import RecentWorks from '../../pages/RecentWorks';
import SelectedWorks from '../../pages/SelectedWorks';
import NotFound from '../../pages/NotFound';

export default function PageRouter() {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/recent-works">
                    <RecentWorks />
                </Route>
                
                <Route path="/selected-works">
                    <SelectedWorks />
                </Route>

                <Route>
                    <NotFound />
                </Route>

            </Switch>
        </Router>
    )
}