import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styling/tired.css';
import styled from 'styled-components';
import { _getDuration, changeDuration } from '../store/breath';

const TiredCircle = styled.span`
  position: absolute;
  bottom: 50%;
  left: 50%;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: slategray;
  border-radius: 50px;
  animation-name: tired;
  animation-duration: ${(props) => `${props.duration}s`};
  animation-iteration-count: 5;
  animation-direction: initial;
`;

const Tired = () => {
  const dispatch = useDispatch();
  const duration = useSelector((state) => state.duration);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    dispatch(_getDuration('tired'));
  }, []);

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
        <TiredCircle duration={duration} className="circle-tired">
          {''}
        </TiredCircle>
      </div>
      <p className="info">::Description of this breath goes here::</p>
      <p className="info">::Benefits of breath go here</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-sm-2">
          <label>Duration (in seconds):</label>
          <input
            type="number"
            name="tired"
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

export default Tired;
