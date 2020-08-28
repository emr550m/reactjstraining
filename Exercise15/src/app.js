import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Home } from "./pages/home";
import { DashboardRouter } from "./pages/dashboard";

export class App extends React.Component {



    render() {
        return <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <DashboardRouter />
                    </Route>
                </Switch>
            </Router>
        </div>
    }
}
