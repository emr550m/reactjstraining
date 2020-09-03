import React, { useEffect, useState } from "react"
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { ACTIONS } from "../state/reducers/login"
import InputBox from "../components/inputbox"
import { backend } from "../utils"

export function Login() {

    const login = useSelector(state => state.login)
    const dashboard = useSelector(state => state.dashboard)
    const [password, setPassword] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (login.username && login.username != "" && password && password != "") {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    });

    function updateUsername(e) {
        dispatch({ type: ACTIONS.SET_USERNAME, username: e.target.value })
    }
    function updatePassword(e) {
        setPassword(e.target.value);
    }
    function onLogin() {
        backend("/api/login", {
            username: login.username,
            password
        }).catch((e) => {
            alert("Login Error");
        }).then((data) => {
            dispatch({ type: "SET_LOG_IN", logIn: true });
            history.push("/dashboard");
        })
    }

    return (<div className="mt-5">
        <nav aria-label="breadcrumb mt-1">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">{dashboard.appTitle}</li>
                <li className="breadcrumb-item active" aria-current="login">Login</li>
            </ol>
        </nav>
        <div className="jumbotron mt-1">
            <form>
                <div className="form-group">
                    <InputBox type="text" label="Username" value={login.username}
                        onChange={updateUsername} />
                </div>
                <div className="form-group">
                    <InputBox type="password" label="Password" value={password} onChange={updatePassword} />
                </div>
                <button type="button" disabled={btnDisabled} className="btn btn-primary" onClick={onLogin}>Login</button>
            </form>
        </div>

    </div>)
}

