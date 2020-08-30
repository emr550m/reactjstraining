import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from 'react-hot-loader'

import {App} from "./app";
 


const render = (Component) => {
    ReactDOM.render(
        <AppContainer><Component /></AppContainer>,
        document.getElementById('application'),
    )
} 

if (module.hot) {
    module.hot.accept()
}


ReactDOM.render(<App />, document.getElementById("application"))