import React, {useEffect, useState} from "react";

import { Nav } from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {commonConstants} from "../../constants";
import { Header } from "../../components";
import {userActions} from "../../actions";
import {RootState} from "../../helper/store";


export default () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch({type: commonConstants.SET_MENU, menu: 'user', menu_name: 'Users'});
    }, []);

    return (
        <>
            <Nav/>
            <Header/>
            <main>

            </main>
        </>
    );
}
