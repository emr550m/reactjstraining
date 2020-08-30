import React, { useState } from "react"
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types"
import { InputBox } from "../components/inputbox";
import axios from "axios";

export function Home() {

    const home = useSelector(state => state.home);
    const dashboard = useSelector(state => state.dashboard);
    const dispatch = useDispatch()
    const history = useHistory();

    function updateUsername(e) {
        dispatch({ type: "SET_USERNAME", username: e.target.value });
    }

    function updatePassword(e) {
        dispatch({ type: "SET_PASSWORD", password: e.target.value });
    }

    function onLogin() {
        axios.post('http://localhost:8090/api/login', {
            username: home.username,
            password: home.password
        })
            .then(function (response) {
                if (response.data.success) {
                    dispatch({ type: "SET_LOG_IN", logIn: true});
                    navigate()
                } else {
                    dispatch({ type: "SET_LOG_IN", logIn: false});
                    alert("Login Error");
                }
            })
            .catch(function (error) {
                dispatch({ type: "SET_LOG_IN", logIn: false});
                alert("Network Error");
            });
    }

    function navigate(){
        history.push("/dashboard")
    }

    return (<div className="mt-5">
        <nav aria-label="breadcrumb mt-1">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">{dashboard.appTitle}</li>
                <li className="breadcrumb-item active" aria-current="page">Login</li>
            </ol>
        </nav>
        <div className="jumbotron mt-1">
            <form>
                <div className="form-group">
                    <InputBox onChange={updateUsername} label="Username" value={home.username} />
                </div>
                <div className="form-group">
                    <InputBox type="password" onChange={updatePassword} label="Password" value={home.password} />
                </div>
                <button type="button" onClick={onLogin} disabled={home.btnDisabled} className="btn btn-primary">Login</button>
            </form>
        </div> </div>)
}