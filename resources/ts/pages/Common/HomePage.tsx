import React from "react";

import { Nav } from "../../components/Nav";
import {useDispatch} from "react-redux";
import {commonConstants} from "../../constants";
import Header from "../../components/Header";

export default () => {
    const dispatch = useDispatch();
    dispatch({ type: commonConstants.SET_MENU, menu: 'dashboard', menu_name: 'Dashboard' });

    return (
        <>
            <Nav/>
            <Header/>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        Dashboard
                    </div>
                </div>
            </main>
        </>
    )
}
