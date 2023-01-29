import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import {playerReducer} from "./playerReducer";
import { trackReducer } from "./trackReducer";
import {AnyAction} from 'redux';

const rootReducer = combineReducers({
    player: playerReducer,
    track: trackReducer
});

export interface State {
    tick: string;
}
  
export const reducer = (state: State = {tick: 'init'}, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
        // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload};
        case 'TICK':
            return {...state, tick: action.payload};
        default:
            return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>