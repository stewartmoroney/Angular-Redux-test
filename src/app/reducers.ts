import { combineReducers } from 'redux';

import { tickReducer, TickState } from './tick/reducer';

export interface AppState {
  tick: TickState;
}

export const rootReducer = combineReducers({
  tick: tickReducer,
});
