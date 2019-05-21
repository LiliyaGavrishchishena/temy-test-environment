import types from '../actionTypes/actionTypesCities';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = cities => ({
  type: types.FETCH_SUCCESS,
  payload: { cities },
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: { error },
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
};
