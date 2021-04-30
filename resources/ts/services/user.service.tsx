import { authHeader } from './authHeader';
// @ts-ignore
let base = baseUrl;

const login = (email: string, password: string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${base}/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

const register = (name: string, email: string, password: string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name, password, email })
    };

    return fetch(`${base}/api/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

const logout = () => {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    return fetch(`${base}/api/logout`, requestOptions)
        .then(handleResponse)
        .then(() => localStorage.removeItem('user'));
}

const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${base}/api/user`, requestOptions)
        .then(handleResponse);
}

const getUser = (id: bigint) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${base}/api/user/${id}`, requestOptions)
        .then(handleResponse);
}

function handleResponse(response: { text: () => Promise<any>; ok: any; status: number; statusText: any; }) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            return Promise.reject(data);
        }

        return data;
    });
}

export const userService = {
    login,
    register,
    logout,
    getAll,
    getUser,
};
