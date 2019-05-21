import axios from 'axios';
import actions from '../actions/actionsCities';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchCities = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('/cities');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchCities };
