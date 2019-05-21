import axios from 'axios';
import actions from '../actions/actionsCountries';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchCountries = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('/countries');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchCountries };
