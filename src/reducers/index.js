import { combineReducers } from 'redux';
import artwork from './artwork';
import filters from './filters'

const rootReducer = combineReducers({
  artwork,
  filters,
});

export default rootReducer;
