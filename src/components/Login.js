import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = ( {setAuth})=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();

       try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const response = await api.post('/api/usr/login/',{
                email : email,
                password : password,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('token', response.data.access_token);
            setAuth(true);
            navigate('/dashboard');
        } catch (error) {
            setError('Invalid email or password. Please try again.')
            console.error('Login error: ', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email here' />
            </div>
            <div>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
            </div>
            {error && <div style={{color:'red'}}>{error}</div>}
            <button type='submit'>Login</button>
        </form>
    );
};



export default Login;