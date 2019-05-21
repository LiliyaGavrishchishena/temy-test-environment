import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import usersReducer from '../redux/reducers/usersReducer';
import countriesReducer from '../redux/reducers/countriesReducer';
import statesReducer from '../redux/reducers/statesReducer';
import citiesReducer from '../redux/reducers/citiesReducer';
import selectedReducer from '../redux/reducers/selectedReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  countries: countriesReducer,
  states: statesReducer,
  cities: citiesReducer,
  selected: selectedReducer,
});
const logger = createLogger();

const middlewares = applyMiddleware(logger, thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
