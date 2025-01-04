// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/login/', {
//                 username,
//                 password,
//             });
//             localStorage.setItem('access_token', response.data.access_token);
//             alert('Login successful!');
//         } catch (error) {
//             console.error('Error during login:', error);
//             alert('Invalid username or password!');
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <div>
//                 <label>Username:</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/login/', {
//                 username,
//                 password,
//             });
//             localStorage.setItem('access_token', response.data.access_token);
//             alert('Login successful!');
//             // Redirect to the next page (e.g., the dashboard)
//         } catch (error) {
//             console.error('Login failed:', error);
//             alert('Invalid credentials!');
//         }
//     };

//     return (
//         <div>
//             <h2>Login to Your Account</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;




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
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
