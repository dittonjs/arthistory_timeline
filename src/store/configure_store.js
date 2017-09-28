import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

export default function() {
  const middleware = [];
  const enhancers = [
    applyMiddleware(...middleware)
  ];

  return compose(...enhancers)(createStore)(rootReducer);
}
