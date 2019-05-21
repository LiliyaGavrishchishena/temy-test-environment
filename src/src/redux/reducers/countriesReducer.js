import types from '../actionTypes/actionTypesCountries';

export default function countriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.countries;

    default:
      return state;
  }
}
