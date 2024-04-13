import React, { useState, useEffect } from 'react';
import api from '../services/api';


const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const fetchCountries = async() =>{
            try{
                const response = await api.get('/api/common/country/');
                setCountries(response.data);
            } catch(error) {
                console.error('Error fetching countries: ', error);
            }
        };
        fetchCountries();
    },[]);

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            {countries.length > 0 ? (
                <h2>Country's list</h2>
            ):(
                <h2>Loading countries...</h2>
            )}
            <ul>
                {countries.map((country) => (
                    <li key={country.id}>{country.name}:
                        <ul>
                            {country.region_list.map((state)=>(
                                <li key={state.id}>{state.name}</li>
                            ))}    
                        </ul>
                        
                    </li>
                ))}
            </ul>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;