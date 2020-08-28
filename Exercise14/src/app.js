import React from "react"
const axios = require('axios').default;
 
import {CustomButton} from "./components/cbutton"

export class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    
    render() {
        return <div style={{ padding: 50, margin:20 }}>
            <CustomButton></CustomButton>
        </div>
    }
}
