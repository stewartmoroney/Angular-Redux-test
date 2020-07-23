import { ActionTypes, AppAction } from './../actions';

export type TickState = number;

const intitalState: TickState = 0;

export const tickReducer = (
  state = intitalState,
  action: AppAction
): TickState => {
  switch (action.type) {
    case ActionTypes.TICK_ACTION:
      return (state + 1) % 100;
    default:
      return state;
  }
};
