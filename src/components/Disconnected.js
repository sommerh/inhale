import React from 'react';
import '../styling/disconnected.css';

const Disconnected = () => {
  return (
    <div className="ball-container">
      <div className="disconnected">
        <div className="sense">
          <img src="eye.jpeg" />
          <p className="number"> 5 </p>
          <p> things you can see</p>
        </div>
        <div className="sense">
          <img src="hand.jpeg" />
          <p className="number"> 4 </p>
          <p>things you can feel</p>
        </div>
        <div className="sense">
          <img src="ear.jpeg" />
          <p className="number"> 3 </p>
          <p>things you can hear</p>
        </div>
        <div className="sense">
          <img src="nose.png" />
          <p className="number"> 2 </p>
          <p>things you can smell/taste</p>
        </div>
        <div className="sense">
          <img src="heart2.jpeg" />
          <p className="number"> 1 </p>
          <p>thing you like about yourself</p>
        </div>
      </div>
    </div>
  );
};

export default Disconnected;
