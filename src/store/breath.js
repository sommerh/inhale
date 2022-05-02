import axios from 'axios';

const GET_DURATION = 'GET_DURATION';
const CHANGE_DURATION = 'CHANGE_DURATION';

export const getDuration = (duration) => ({
  type: GET_DURATION,
  duration,
});

export const changeDuration = (duration) => ({
  type: CHANGE_DURATION,
  duration,
});

export const _getDuration = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/strategies/${name}`);
      dispatch(getDuration(data.duration));
    } catch (err) {
      console.error('😤 Unable to get durations...', err);
    }
  };
};

export default function breathReducer(duration = 0, action) {
  switch (action.type) {
    case GET_DURATION:
      return action.duration;
    case CHANGE_DURATION:
      return action.duration;
    default:
      return duration;
  }
}
