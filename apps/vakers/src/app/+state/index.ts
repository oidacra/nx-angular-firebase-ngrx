import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromUi from './ui.reducer';
import { InjectionToken } from '@angular/core';

// tslint:disable-next-line
export interface State {
  ui: fromUi.UiState;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    ui: fromUi.reducer,
  }),
});

export const metaReducers: MetaReducer<State>[] = [];
