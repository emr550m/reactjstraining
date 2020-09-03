import React, { useEffect, useState } from "react"
import {
    Link
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { backend } from "../utils"
import { ListItem } from "../components/listitem"

export function Dashboard() {

    const dashboard = useSelector(state => state.dashboard);
    const history = useHistory();
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!dashboard.logIn) {
            toLogin();
        } else {
            getList();
        }
    }, []);

    function getList() {
        backend("/api/getList").catch((e) => {
            alert("General Error");
            setIsLoading(false);
        }).then((data) => {
            if (data.list) {
                setList(data.list);
            }
            setIsLoading(false)
        });
    }

    function logOut() {
        dispatch({ type: "SET_LOG_IN", logIn: false });
        toLogin();
    }

    function toLogin() {
        history.push("/login")
    }

    return (<div className="mt-5">
        <nav aria-label="breadcrumb mt-1">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">App Title</li>
                <li className="breadcrumb-item active" aria-current="Dashboard">Dashboard</li>
                <li className="breadcrumb-item">
                    <button type="button" onClick={logOut} className="btn btn-primary btn-sm" >Log Out</button>
                </li>
            </ol>
        </nav>
        <div className="jumbotron mt-1">
            {(isLoading ?<div> <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
                <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div></div> : <ul className="list-group">
                    {
                        list.map((item) => {
                            return <ListItem key={item.key} title={item.title}
                                description={item.description} image={item.image}></ListItem>
                        })
                    }
                </ul>)}
        </div>
    </div>)
} 
