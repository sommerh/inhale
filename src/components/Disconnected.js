import React from 'react';
import '../styling/disconnected.css';

const Disconnected = () => {
  return (
    <div className="ball-container">
      <div className="disconnected">
        <div className="sense">
          <img src="https://cdn4.vectorstock.com/i/1000x1000/76/08/human-hand-palm-icon-vector-28167608.jpg" />
          <p>Name 5 things you can see</p>
        </div>
        <div className="sense">
          <img src="https://cdn4.vectorstock.com/i/1000x1000/76/08/human-hand-palm-icon-vector-28167608.jpg" />
          <p>Name 4 things you can feel</p>
        </div>
        <div className="sense">
          <img src="https://cdn4.vectorstock.com/i/1000x1000/76/08/human-hand-palm-icon-vector-28167608.jpg" />
          <p>Name 3 things you can hear</p>
        </div>
        <div className="sense">
          <img src="https://cdn4.vectorstock.com/i/1000x1000/76/08/human-hand-palm-icon-vector-28167608.jpg" />
          <p>Name 2 things you smell/taste</p>
        </div>
        <div className="sense">
          <img src="https://cdn4.vectorstock.com/i/1000x1000/76/08/human-hand-palm-icon-vector-28167608.jpg" />
          <p>Name 1 things you like about yourself</p>
        </div>
      </div>
    </div>
  );
};

export default Disconnected;
