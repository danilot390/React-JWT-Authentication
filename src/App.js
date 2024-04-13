import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isAuthenticated, setAuth] = useState(localStorage.getItem('token') || false); 
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login setAuth={setAuth} />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>  
    </AuthProvider>
    
  );
};

export default App;