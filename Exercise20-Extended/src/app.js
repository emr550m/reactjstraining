import React from "react"
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

import { store } from "./state/store";
import { Provider } from "react-redux";

export function App() {

    return (<div>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </div>)
}
