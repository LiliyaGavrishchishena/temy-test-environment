import types from '../actionTypes/actionTypesStates';

export default function statesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.states;

    default:
      return state;
  }
}
