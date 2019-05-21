import types from '../actionTypes/actionTypesSelected';

const INITIAL = {
  countries: null,
  states: null,
  cities: null,
};

export default function statesReducer(state = INITIAL, { type, payload }) {
  switch (type) {
    case types.SELECTED_COUNTRIES:
      return { ...state, countries: payload };

    case types.SELECTED_STATE:
      return { ...state, states: payload };

    case types.SELECTED_CITY:
      return { ...state, cities: payload };

    default:
      return state;
  }
}
