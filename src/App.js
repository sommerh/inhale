import React, { useState } from 'react';
// import logo from './logo.svg';
import './styling/App.css';

const App = () => {
  const [breath, setBreath] = useState({
    inhale: 0,
    exhale: 0,
    pauseOne: 0,
    pauseTwo: 0,
  });

  return (
    <div className="App">
      <h1>Breath</h1>
      <div id="circle">0</div>
    </div>
  );
};

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('/users')
//       .then((res) => res.json())
//       .then((users) => setUsers({ users }));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Users</h1>
//       {users.map((user) => (
//         <div key={user.id}>{user.username}</div>
//       ))}
//     </div>
//   );
// };

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
