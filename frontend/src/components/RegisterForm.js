// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterForm = ({ setIsRegistered }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleRegister = async (e) => {
//         e.preventDefault();
        
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/register/', {
//                 username,
//                 password,
//             });
//             alert('Registration successful! You can now login.');
//             setIsRegistered(true); // Set the state to show the login form
//         } catch (error) {
//             console.error('Registration failed:', error.response.data);
//             alert(error.response?.data?.error || 'Registration failed. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h2>Create a New Account</h2>
//             <form onSubmit={handleRegister}>
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
//                 <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default RegisterForm;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                password,
            });
            alert('Registration successful! Please log in.');
            navigate('/login'); // Navigate to login after successful registration
        } catch (error) {
            console.error('Registration failed:', error.response?.data);
            alert(error.response?.data?.error || 'Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Create a New Account</h2>
            <form onSubmit={handleRegister}>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
