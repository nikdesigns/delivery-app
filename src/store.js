import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducers } from './reducers/pizzaReducers';

const finalReducer = combineReducers({
  getAllPizzasReducers: getAllPizzasReducers,
});

const intialState = {};
const composeEnhancers = composeWithDevTools();

const store = createStore(
  finalReducer,
  intialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
