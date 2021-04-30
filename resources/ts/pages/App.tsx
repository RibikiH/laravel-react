import React, {useEffect, useRef} from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import { history } from "../helper/history";
import LoadingBar from 'react-top-loading-bar'

import {RootState} from "../helper/store";
import {useSelector} from "react-redux";
import {PrivateRoute} from '../components';

import HomePage from './Common/HomePage';

// auth
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

// users
import UserIndex from "./Users/UserIndex";
import UserEdit from "./Users/UserEdit";

const App = () => {
    const ref = useRef(null);
    const loading = useSelector((state: RootState)=> state.common.loading);

    useEffect(() => {
        loading ?
            // @ts-ignore
            ref.current.continuousStart() : ref.current.complete();
    }, [loading])

    return (<>
        <LoadingBar color='#f11946' ref={ref} />
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <PrivateRoute exact path="/user" component={UserIndex}/>
                <PrivateRoute exact path="/user/:id/edit" component={UserEdit}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
    </>)
};
export default App;
