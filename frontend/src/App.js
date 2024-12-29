import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use Routes and Navigate in place of Switch and Redirect
import Login from './components/Login'; // Import the Login component
import PostpartumForm from './components/PostpartumForm';
import PostpartumTable from './components/PostpartumTable';
import WeightChart from './components/WeightChart';

function App() {
    const [token, setToken] = useState(localStorage.getItem('access_token')); // Manage the token state

    return (
        <Router>
            <div>
                <h1>Postpartum Tracker</h1>
                <Routes>
                    {/* Route for Login */}
                    <Route path="/login" element={<Login setToken={setToken} />} />

                    {/* Protected Route for the main tracker */}
                    <Route
                        path="/dashboard"
                        element={token ? (
                            <div>
                                <PostpartumForm />
                                <PostpartumTable />
                            </div>
                        ) : (
                            <Navigate to="/login" /> // Navigate to login if not authenticated
                        )}
                    />

                    {/* Default Route */}
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
