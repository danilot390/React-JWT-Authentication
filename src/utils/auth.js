import jwt_decode from 'jwt-decode';

export const getUserInfo = () => {
    const token = localStorage.getItem('token');
    if(token) {
        return jwt_decode(token);
    }
    return null;
}