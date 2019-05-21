import types from '../actionTypes/actionTypesUsers';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = users => ({
  type: types.FETCH_SUCCESS,
  payload: { users },
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
