import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { store } from "./state/store"
import { Provider } from 'react-redux'

import { HomeRouter } from "./pages/home";
import { DashboardRouter } from "./pages/dashboard";

export class App extends React.Component {



    render() {
        return <Provider store={store}> <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomeRouter />
                    </Route>
                    <Route path="/home">
                        <HomeRouter />
                    </Route>
                    <Route path="/dashboard">
                        <DashboardRouter />
                    </Route>
                </Switch>
            </Router>
        </div> </Provider>
    }
}
