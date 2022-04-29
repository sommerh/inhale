import React, { useState } from 'react';
// import logo from './logo.svg';
import './styling/App.css';
import {
  Container,
  // Row,
  // Col,
  // Form,
  // Input,
  // Button,
  // Navbar,
  // Nav,
  // NavbarBrand,
  // NavLink,
  // NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from 'react-bootstrap';

const App = () => {
  // const [breath, setBreath] = useState({
  //   inhale: 0,
  //   exhale: 0,
  //   pauseOne: 0,
  //   pauseTwo: 0,
  // });

  return (
    <div className="App">
      {/* <Container> */}
      <h1>Three-Six-Nine Breathing</h1>
      <div className="container">
        <span className="circle">{''}</span>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default App;

//TODO:
//set up router and make a navbar and three different links
//

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
