import types from '../actionTypes/actionTypesStates';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = states => ({
  type: types.FETCH_SUCCESS,
  payload: { states },
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
