import React from "react"
import PropTypes from "prop-types"
import { 
    Link
} from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';

 class Dashboard extends React.Component {
    
    navigate=()=>{
        this.props.history.push("/home")
    }

    updateTitle=(e)=>{
        this.props.setAppTitle(e.target.value)
    }
    
    render() {
        
        return <div>
            <button onClick={this.navigate}>{this.props.appTitle}</button>
           This Is Dashboard
           <Link to="/home">Home</Link> App Version {this.props.appVersion}
           <input type="text" onChange={this.updateTitle} value={this.props.appTitle} />
        </div>
    }
}

const mapDispatchToProps = dispatch => ({
    setAppTitle: appTitle => dispatch({ type: "SET_APP_TITLE", appTitle }),
    setAppVersion: appVersion => dispatch({ type: "SET_APP_VERSION", appVersion }),
})

const mapStateToProps = (state) => {
    const { dashboard, home } = state
    return { appTitle: dashboard.appTitle, appVersion: dashboard.appVersion }
};


export const DashboardRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard)); 