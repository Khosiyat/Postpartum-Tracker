import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PostpartumForm from './components/PostpartumForm';
import PostpartumTable from './components/PostpartumTable';

function App() {
    const [token, setToken] = useState(localStorage.getItem('access_token'));
    const [postpartumData, setPostpartumData] = useState([]); // Shared state for data

    const handleTokenChange = (newToken) => {
        if (newToken) {
            localStorage.setItem('access_token', newToken);
        } else {
            localStorage.removeItem('access_token');
        }
        setToken(newToken);
    };

    const handleAddData = (newData) => {
        setPostpartumData((prevData) => [...prevData, newData]); // Append new data to existing state
    };

    return (
        <Router>
            <div style={{ margin: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>Postpartum Tracker</h1>
                <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
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
                                <PostpartumForm onDataAdded={handleAddData} />
                                <PostpartumTable data={postpartumData} />
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
