import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import '../styling/threeSixNine.css';
import { changeDuration, _getDuration } from '../store/breath';
// import Form from 'react-bootstrap/Form';

const AnxiousCircle = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: slategray;
  border-radius: 50px;
  animation-name: anxious;
  animation-duration: ${(props) => `${props.duration}s`};
  animation-iteration-count: 5;
  animation-direction: initial;
`;

const ThreeSixNine = (props) => {
  const dispatch = useDispatch();
  const duration = useSelector((state) => state.duration);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    dispatch(_getDuration('three-six-nine'));
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
        <AnxiousCircle duration={duration} className="circle-anxious">
          {''}
        </AnxiousCircle>
      </div>
      <p className="info">::Description of this breath goes here::</p>
      <p className="info">::Benefits of breath go here</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-sm-2">
          <label>Duration (in seconds):</label>
          <input
            type="number"
            name="three-six-nine"
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

export default ThreeSixNine;
