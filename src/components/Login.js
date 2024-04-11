import React, { useState } from 'react';
import api from '../services/api';

const Login = ( {setAuth})=> {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async()=>{
       try {
            const response = await api.post('/api/usr/login', {username, password});
            localStorage.setItem('token', response.data.token);
            setAuth(true);
        } catch (error) {
            console.error('Login error: ', error);
        }
    }
};

return (
    <div>
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} />
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
);

export default Login;