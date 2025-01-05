// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use Routes and Navigate in place of Switch and Redirect
// import Login from './components/Login'; // Import the Login component
// import PostpartumForm from './components/PostpartumForm';
// import PostpartumTable from './components/PostpartumTable';
// import WeightChart from './components/WeightChart';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('access_token')); // Manage the token state

//     return (
//         <Router>
//             <div>
//                 <h1>Postpartum Tracker</h1>
//                 <Routes>
//                     {/* Route for Login */}
//                     <Route path="/login" element={<Login setToken={setToken} />} />

//                     {/* Protected Route for the main tracker */}
//                     <Route
//                         path="/dashboard"
//                         element={token ? (
//                             <div>
//                                 <PostpartumForm />
//                                 <PostpartumTable />
//                             </div>
//                         ) : (
//                             <Navigate to="/login" /> // Navigate to login if not authenticated
//                         )}
//                     />

//                     {/* Default Route */}
//                     <Route path="/" element={<Navigate to="/dashboard" />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use Routes and Navigate in place of Switch and Redirect
// import Login from './components/Login'; // Import the Login component
// import Register from './components/Register'; // Import the Register component
// import PostpartumForm from './components/PostpartumForm';
// import PostpartumTable from './components/PostpartumTable';
// import WeightChart from './components/WeightChart';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('access_token')); // Manage the token state

//     return (
//         <Router>
//             <div>
//                 <h1>Postpartum Tracker</h1>
//                 <Routes>
//                     {/* Route for Register (to create a username and password) */}
//                     <Route path="/" element={<Register />} /> {/* Display the Register form on the root page */}

//                     {/* Route for Login */}
//                     <Route path="/login" element={<Login setToken={setToken} />} />

//                     {/* Protected Route for the main tracker */}
//                     <Route
//                         path="/dashboard"
//                         element={token ? (
//                             <div>
//                                 <PostpartumForm />
//                                 <PostpartumTable />
//                             </div>
//                         ) : (
//                             <Navigate to="/login" /> // Navigate to login if not authenticated
//                         )}
//                     />

//                     {/* Default Route (after login or registration, redirect to dashboard) */}
//                     <Route path="/home" element={<Navigate to="/dashboard" />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;





// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import PostpartumForm from './components/PostpartumForm';
// import PostpartumTable from './components/PostpartumTable';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('access_token'));

//     return (
//         <Router>
//             <div>
//                 <h1>Postpartum Tracker</h1>
//                 <Routes>
//                     {/* Route for Register */}
//                     <Route path="/" element={<Register />} />

//                     {/* Route for Login */}
//                     <Route path="/login" element={<Login setToken={setToken} />} />

//                     {/* Protected Route for Dashboard */}
//                     <Route
//                         path="/dashboard"
//                         element={token ? (
//                             <div>
//                                 <PostpartumForm />
//                                 <PostpartumTable />
//                             </div>
//                         ) : (
//                             <Navigate to="/login" />
//                         )}
//                     />

//                     {/* Redirect /home to /dashboard */}
//                     <Route path="/home" element={<Navigate to="/dashboard" />} />

//                     {/* Catch-All Route: Redirect unknown paths to Register */}
//                     <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import PostpartumForm from './components/PostpartumForm';
// import PostpartumTable from './components/PostpartumTable';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('access_token'));

//     const handleTokenChange = (newToken) => {
//         if (newToken) {
//             localStorage.setItem('access_token', newToken);
//         } else {
//             localStorage.removeItem('access_token');
//         }
//         setToken(newToken);
//     };

//     return (
//         <Router>
//             <div>
//                 <h1>Postpartum Tracker</h1>
//                 <nav>
//                     <a href="/">Register</a> | 
//                     <a href="/login">Login</a> | 
//                     {token && <a href="/dashboard">Dashboard</a>}
//                 </nav>
//                 <Routes>
//                     <Route path="/" element={<Register />} />
//                     <Route path="/login" element={<Login setToken={handleTokenChange} />} />
//                     <Route
//                         path="/dashboard"
//                         element={token ? (
//                             <div>
//                                 <PostpartumForm />
//                                 <PostpartumTable />
//                             </div>
//                         ) : (
//                             <Navigate to="/login" />
//                         )}
//                     />
//                     <Route path="/home" element={<Navigate to="/dashboard" />} />
//                     <Route path="*" element={<div>404 - Page Not Found</div>} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PostpartumForm from './components/PostpartumForm';
import PostpartumTable from './components/PostpartumTable';

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
