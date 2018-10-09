import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import('../components/templates/Home/Home'),
    loading: Loading
});

const AppRouting = () => (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={Home} />
        </Switch>
    </Router>
);

export default AppRouting;
