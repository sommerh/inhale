import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styling/box.css';
import styled from 'styled-components';
import { changeDuration, _getDuration } from '../store/breath';

const BoxCircle = styled.span`
  position: absolute;
  bottom: 5%;
  left: 32%;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: khaki;
  border-radius: 50px;
  animation-name: box;
  animation-duration: ${(props) => `${props.duration}s`};
  animation-iteration-count: 10;
  animation-direction: initial;
`;

const Box = () => {
  const dispatch = useDispatch();
  const duration = useSelector((state) => state.duration);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    dispatch(_getDuration('box'));
  }, []);
  //the dependancy array above is throwing a warning in linter but it has to be there

  useEffect(() => {
    setSeconds(duration);
  }, [duration]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(changeDuration(seconds));
  };

  return (
    <>
      <div className="ball-container">
        <BoxCircle duration={duration} className="circle-box">
          {''}
        </BoxCircle>
      </div>
      <p className="info">::Description of this breath goes here::</p>
      <p className="info">::Benefits of breath go here</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-sm-2">
          <label>Duration (in seconds):</label>
          <input
            type="number"
            name="box"
            className="form-control"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-secondary">
          Edit
        </button>
      </form>
    </>
  );
};

export default Box;
