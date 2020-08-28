import React from "react"
import PropTypes from "prop-types"
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch,useSelector } from 'react-redux';

export function Dashboard() {

    const home = useSelector(state => state.home);
    const dashboard = useSelector(state => state.dashboard);
    const dispatch = useDispatch()
    const history = useHistory();

    function navigate(){
        history.push("/home")
    }

    function updateTitle(e){
        dispatch({ type: "SET_APP_TITLE", appTitle: e.target.value }); 
    }

    return (<div>
        <button onClick={navigate}>{dashboard.appTitle}</button>
       This Is Dashboard
       <Link to="/home">Home</Link> App Version {dashboard.appVersion}
       <input type="text" onChange={updateTitle} value={dashboard.appTitle} />
    </div>)
}