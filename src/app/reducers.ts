import { combineReducers } from 'redux';
import { TickState, tickReducer } from './tick/reducer'; 

interface AppState {
    tick: TickState;
}

const intitalState: TickState = 0;

export const rootReducer =combineReducers({
    tick: tickReducer
});
