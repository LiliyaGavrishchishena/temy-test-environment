import axios from 'axios';
import actions from '../actions/actionsUsers';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchUsers = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('/users');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchUsers };
