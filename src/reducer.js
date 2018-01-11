/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

function jediReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [
        ...action.payload,
        ...state,
      ];
    default:
      return state;
  }
}

export default combineReducers({
  jedi: jediReducer,
  form: formReducer
});
