import { combineReducers } from 'redux';
import auth from './auth';
import consumptionList from './consumptionList';

export default combineReducers({
  auth,
  consumptionList,
});
