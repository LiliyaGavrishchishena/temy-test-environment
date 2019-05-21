import types from '../actionTypes/actionTypesUsers';

export default function usersReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.users;

    default:
      return state;
  }
}
