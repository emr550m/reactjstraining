import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { ListItem } from "../components/listitem"

export function Dashboard() {

    const home = useSelector(state => state.home);
    const dashboard = useSelector(state => state.dashboard);
    const dispatch = useDispatch()
    const history = useHistory();
    const [list, SetList] = useState([]);

    useEffect(() => {
        if (!dashboard.logIn) {
            navigate();
        } else {
            axios.get('http://localhost:8090/api/getList')
                .then((response) => {
                    // handle success
                    SetList(response.data.list);
                })
        }
    }, [])


    function navigate() {
        history.push("/home")
    }

    function logOut(){
        dispatch({ type: "CLEAR_LOGIN"});
        navigate();
    }

    function updateTitle(e) {
        dispatch({ type: "SET_APP_TITLE", appTitle: e.target.value });
    }

    return (<div className="mt-5">
        <nav aria-label="breadcrumb mt-1">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">{dashboard.appTitle}</li>
                <li className="breadcrumb-item active" aria-current="page">Dashobard</li>
                <li className="breadcrumb-item" aria-current="page">
                    <button type="button" className="btn btn-primary btn-sm" onClick={logOut}>
                         Log Out 
                    </button>
                </li>
            </ol>
        </nav>
        <div className="jumbotron mt-1">
            <ul class="list-group">
                {list.map((item) => {
                    return <ListItem key={item.key} image={item.image} title={item.title} description={item.description} />
                })}
            </ul>
        </div>
    </div>)
}