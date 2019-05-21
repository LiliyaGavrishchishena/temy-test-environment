import types from '../actionTypes/actionTypesCities';

export default function citiesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.cities;

    default:
      return state;
  }
}
