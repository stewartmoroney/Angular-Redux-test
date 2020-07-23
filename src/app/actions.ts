import { TickAction } from './tick/actions';

export enum ActionTypes {
  TICK_ACTION = 'TICK',
}

export type AppAction = TickAction;
