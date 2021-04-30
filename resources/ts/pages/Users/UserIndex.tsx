import React, {useEffect, useState} from "react";

import { Nav } from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {commonConstants} from "../../constants";
import { Header } from "../../components";
import Avatar from 'react-avatar';
import {userActions} from "../../actions";
import {RootState} from "../../helper/store";
import {Link} from "react-router-dom";


export default () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const users: { items: [] } = useSelector((state :RootState) => state.users);

    useEffect(() => {
        dispatch({ type: commonConstants.SET_MENU, menu: 'user', menu_name: 'Users' });
        userActions.getAll(dispatch).then(() => setLoading(false))
    },[]);

    return (
        <>
            <Nav/>
            <Header/>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Title
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {loading && (() => {
                                                    let rows = [];
                                                    for (let i=0; i < 5; i++) {
                                                        rows.push(
                                                            <tr key={i}>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="animate-pulse flex space-x-4">
                                                                        <div className="rounded-full bg-blue-400 h-12 w-12"/>
                                                                        <div className="flex-1 space-y-4 py-1">
                                                                            <div className="space-y-2">
                                                                                <div className="h-4 bg-blue-400 rounded"/>
                                                                                <div className="h-4 bg-blue-400 rounded w-5/6"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="animate-pulse flex-1 space-y-4 py-1">
                                                                        <div className="space-y-2">
                                                                            <div className="h-4 bg-blue-400 rounded"/>
                                                                            <div className="h-4 bg-blue-400 rounded w-5/6"/>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="animate-pulse flex-1 space-y-4 py-1">
                                                                        <span className="px-2 inline-flex h-5 w-12 leading-5 font-semibold rounded-full bg-blue-400 "/>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="animate-pulse flex-1 space-y-4 py-1">
                                                                        <span className="px-2 inline-flex h-5 w-12 leading-5 font-semibold rounded bg-blue-400 "/>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="animate-pulse flex-1 space-y-4 py-1">
                                                                        <span className="px-2 inline-flex h-5 w-12 leading-5 font-semibold rounded bg-blue-400 "/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                    return rows;
                                                })()}
                                                { !loading && users.items && (() => {
                                                    let rows: JSX.Element[] = [];
                                                    users.items.map((user: { id: bigint, name: string, email: string }, index) => {
                                                        rows.push(
                                                            <tr key={index}>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="flex items-center">
                                                                        <div className="flex-shrink-0 h-10 w-10">
                                                                            <Avatar name={user.name} className="h-10 w-10 rounded-full" size="40"/>
                                                                        </div>
                                                                        <div className="ml-4">
                                                                            <div className="text-sm font-medium text-gray-900">
                                                                                {user.name}
                                                                            </div>
                                                                            <div className="text-sm text-gray-500">
                                                                                {user.email}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="text-sm text-gray-900">Regional Paradigm
                                                                        Technician
                                                                    </div>
                                                                    <div className="text-sm text-gray-500">Optimization</div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                        Active
                                                                    </span>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    Admin
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                    <Link to={`/user/` + user.id + `/edit`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })

                                                    return rows;
                                                })() }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
