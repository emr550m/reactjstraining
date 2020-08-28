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

import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";

export function App(){
 
        return (<Provider store={store}> <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </div> </Provider>)
}
