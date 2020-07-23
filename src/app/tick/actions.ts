import { Action } from 'redux';

import { ActionTypes } from './../actions';

export interface TickAction extends Action {
  type: ActionTypes.TICK_ACTION;
}

export const newTick = (): TickAction => ({
  type: ActionTypes.TICK_ACTION,
});
