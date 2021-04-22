import {commonConstants, userConstants} from '../constants';
import { userService } from '../services';
import { history } from "../helper/history";

const login = (dispatch: (arg0: any) => void, email: string, password: string) => {
    dispatch(request({ email }))
    dispatch({ type: commonConstants.START_PROGRESS })
    return userService.login(email, password)
        .then(
            user => {
                dispatch(success(user));
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
            }
        )

    function request(user: any) {
        return { type: userConstants.LOGIN_REQUEST, user }
    }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: string) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const register = (dispatch: (arg0: { type: string; user?: any; error?: any; }) => void, name: string, email: string, password: string) => {
    dispatch(request({name, email, password}))
    return userService.register(name, email, password)
        .then(
            user => {
                dispatch(success(user));
                history.push('/login');
            }
        ).catch(error => {
            return Promise.reject(error);
        });

    function request(user: { password: string; name: string; email: string }) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user: any) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error: string) { return { type: userConstants.REGISTER_FAILURE, error } }
}

const logout = (dispatch: (arg0: any) => void) => {
    userService.logout()
        .then(() => {
                dispatch(success());
                history.push('/login');
            }, () => {
                dispatch(success());
            }
        );

    function success() { return { type: userConstants.LOGOUT } }
}

const getAll = (dispatch: (arg0: any) => void) => {
    userService.getAll()
        .then(() => {

        })
}

export const userActions = {
    login,
    register,
    logout,
};
