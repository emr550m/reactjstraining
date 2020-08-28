import React from "react"
import PropTypes from "prop-types"
import { 
    Link
} from "react-router-dom";
import { withRouter } from "react-router";

 class Dashboard extends React.Component {
    
    navigate=()=>{
        this.props.history.push("/home")
    }
    
    render() {
        
        return <div>
            <button onClick={this.navigate}>Navigater To Home</button>
           This Is Dashboard
           <Link to="/home">Home</Link>
        </div>
    }
}


export const DashboardRouter = withRouter(Dashboard);
 