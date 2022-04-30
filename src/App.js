import React, { useState } from 'react';
import NavBar from './components/NavBar';
import AllRoutes from './components/AllRoutes';

// import logo from './logo.svg';
import './styling/App.css';
// import { Accordion, Container, Button } from 'react-bootstrap';

const App = () => {
  // const [breath, setBreath] = useState({
  //   inhale: 0,
  //   exhale: 0,
  //   pauseOne: 0,
  //   pauseTwo: 0,
  // });
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <AllRoutes />

      {/* <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Anxious</Accordion.Header>
            <Accordion.Body>
              <Button onClick={() => setShowComponent(!showComponent)}>
                Three-Six-Nine
              </Button>
              {console.log(showComponent)}
              {showComponent ? <ThreeSixNine /> : null}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tired</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container> */}
      {/* <Container>
      <h1>Three-Six-Nine Breathing</h1>
      <div className="container">
        <span className="circle">{''}</span>
      </div>
      </Container> */}
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
