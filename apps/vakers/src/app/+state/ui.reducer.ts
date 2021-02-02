import { createReducer, on, Action } from '@ngrx/store';

import * as UiActions from './ui.actions';

export const UI_FEATURE_KEY = 'ui';

export interface UiState {
  isOpenSidebar: boolean;
}

export interface UiPartialState {
  readonly [UI_FEATURE_KEY]: UiState;
}

export const initialState: UiState = {
  isOpenSidebar: false,
};

const authReducer = createReducer(
  initialState,
  on(UiActions.openSidebar, (state) => ({
    ...state,
    isOpenSidebar: true,
  })),

  on(UiActions.closeSidebar, (state) => ({
    ...state,
    isOpenSidebar: false,
  }))
);

export function reducer(state: UiState | undefined, action: Action) {
  return authReducer(state, action);
}
