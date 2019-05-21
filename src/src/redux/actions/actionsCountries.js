import types from '../actionTypes/actionTypesCountries';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = countries => ({
  type: types.FETCH_SUCCESS,
  payload: { countries },
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
