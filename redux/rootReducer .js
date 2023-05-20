import { combineReducers } from 'redux';

import counterReducer from '../src/containers/EquipmentDetailStatus/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
