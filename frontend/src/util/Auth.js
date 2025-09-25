import {redirect} from "react-router-dom";

export function getTokenDuration() {
    const expiration = localStorage.getItem('expiration');
    const exirationDate = new Date(expiration);
    const now = new Date();
    return exirationDate.getTime() - now.getTime();
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if(!token) return null;

    const duration = getTokenDuration();
    if(duration < 0){
        return 'EXPIRED';
    }
    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthToken() {
    const token = getAuthToken();

    if (!token) return redirect('/auth');

    return null;
}

