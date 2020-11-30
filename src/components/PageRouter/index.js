// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from '../../pages/Home';
import RecentWorks from '../../pages/RecentWorks';
import SelectedWorks from '../../pages/SelectedWorks';
import NotFound from '../../pages/NotFound';

// Components
import NavMain from '../../components/NavMain';
import NavAnimated from '../../components/NavAnimated';

export default function PageRouter() {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <NavAnimated />
                    <Home />
                </Route>

                <Route path="/recent-works">
                    <NavMain />
                    <RecentWorks />
                </Route>

                <Route path="/selected-works">
                    <NavMain />
                    <SelectedWorks />
                </Route>

                <Route>
                    <NavMain />
                    <NotFound />
                </Route>

            </Switch>
        </Router>
    )
}