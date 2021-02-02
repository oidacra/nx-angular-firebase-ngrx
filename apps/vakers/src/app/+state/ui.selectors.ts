import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UI_FEATURE_KEY, UiPartialState, UiState } from './ui.reducer';

export const getUiState = createFeatureSelector<UiPartialState, UiState>(
  UI_FEATURE_KEY
);

export const getStatusSidebar = createSelector(
  getUiState,
  (state: UiState) => state.isOpenSidebar
);
