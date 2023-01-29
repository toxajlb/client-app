import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import {createStore, AnyAction, Store} from 'redux';
import {reducer, RootState} from "./reducers";
import thunk, {ThunkDispatch} from "redux-thunk";


const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>