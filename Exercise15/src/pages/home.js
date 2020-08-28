import React from "react"
import PropTypes from "prop-types"
import { 
    Link
} from "react-router-dom";

export class Home extends React.Component {
    render() {
        
        return <div>
           This Is Home Page
           <Link to="/dashboard">Dashboard</Link>
        </div>
    }
}
 