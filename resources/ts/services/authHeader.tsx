export function authHeader() : { 'Content-Type': string, Authorization?: string } {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user') as string);

    if (user && user.access_token) {
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.access_token
        };
    } else {
        return { 'Content-Type': 'application/json', };
    }
}
