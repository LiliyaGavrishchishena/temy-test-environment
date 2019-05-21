import axios from 'axios';
import actions from '../actions/actionsStates';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchStates = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('/states');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchStates };
