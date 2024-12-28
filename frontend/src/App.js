// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import PostpartumForm from './components/PostpartumForm';
import PostpartumTable from './components/PostpartumTable';

function App() {
    return (
        <div>
            <h1>Postpartum Tracker</h1>
            <PostpartumForm />
            <PostpartumTable />
        </div>
    );
}

export default App;
