import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username,
                password,
            });

            // Extract tokens from response
            const { access, refresh } = response.data;

            // Store tokens in localStorage
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            // Notify user and redirect to dashboard
            alert('Login successful!');
            setToken(access); // Update state with the token
            navigate('/dashboard'); // Navigate to the protected route
        } catch (error) {
            console.error('Login failed:', error.response?.data);
            alert(error.response?.data?.detail || 'Invalid credentials!');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
