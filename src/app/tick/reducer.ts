import { TICK_ACTION } from './actions'; 

export type TickState = number;

const intitalState: TickState = 0;

export const tickReducer = (state = intitalState, action) => {
    switch(action.type) {
        case TICK_ACTION: 
            return (state + 1) % 100;
        default: 
            return state;
    }
}
