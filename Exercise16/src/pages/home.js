import React from "react"
import PropTypes from "prop-types"
import { 
    Link
} from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        
        return <div>
           This Is Home Page
           <Link to="/dashboard">Dashboard</Link>{this.props.appTitle}
        </div>
    }
}
 

const mapDispatchToProps = dispatch => ({
    setWelcomeMessage: welcomeMessage => dispatch({ type: "SET_WELCOME_MESSAGE", welcomeMessage }), 
})

const mapStateToProps = (state) => {
    const { dashboard, home } = state
    return { appTitle: dashboard.appTitle, welcomeMessage: home.welcomeMessage }
};


export const HomeRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home)); 