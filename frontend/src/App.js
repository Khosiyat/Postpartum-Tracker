import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PostpartumForm from './components/PostpartumForm';
import PostpartumTable from './components/PostpartumTable'; // Correct import


function App() {
    const [token, setToken] = useState(localStorage.getItem('access_token'));

    const handleTokenChange = (newToken) => {
        if (newToken) {
            localStorage.setItem('access_token', newToken);
        } else {
            localStorage.removeItem('access_token');
        }
        setToken(newToken);
    };

    return (
        <Router>
            <div>
                <h1>Postpartum Tracker</h1>
                <nav>
                    <a href="/">Register</a> | 
                    <a href="/login">Login</a> | 
                    {token && <a href="/dashboard">Dashboard</a>}
                </nav>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login setToken={handleTokenChange} />} />
                    <Route
                        path="/dashboard"
                        element={token ? (
                            <div>
                                <PostpartumForm />
                                <PostpartumTable />
                            </div>
                        ) : (
                            <Navigate to="/login" />
                        )}
                    />
                    <Route path="/home" element={<Navigate to="/dashboard" />} />
                    <Route path="*" element={<div>404 - Page Not Found</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
