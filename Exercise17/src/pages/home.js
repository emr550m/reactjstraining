import React from "react"
import PropTypes from "prop-types"
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch,useSelector } from 'react-redux';

export function Home() {

    const home = useSelector(state => state.home);
    const dashboard = useSelector(state => state.dashboard);
    const history = useHistory();

    return (<div> This Is Home Page <Link to="/dashboard">Dashboard</Link>{dashboard.appTitle}</div>)
}