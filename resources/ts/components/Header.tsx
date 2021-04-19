import React from "react"
import {useSelector} from "react-redux";
import {RootState} from "../helper/store";

export const Header = () => {
    const menuName = useSelector((state: RootState) => state.system.menu_name);

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    { menuName }
                </h1>
            </div>
        </header>
    )
}
