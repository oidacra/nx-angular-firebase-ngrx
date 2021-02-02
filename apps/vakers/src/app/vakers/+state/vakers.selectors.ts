import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  VAKERS_FEATURE_KEY,
  State,
  VakersPartialState,
  vakersAdapter,
} from './vakers.reducer';

// Lookup the 'Vakers' feature state managed by NgRx
export const getVakersState = createFeatureSelector<VakersPartialState, State>(
  VAKERS_FEATURE_KEY
);

const { selectAll, selectEntities } = vakersAdapter.getSelectors();

export const getVakersLoaded = createSelector(
  getVakersState,
  (state: State) => state.loaded
);

export const getVakersError = createSelector(
  getVakersState,
  (state: State) => state.error
);

export const getAllVakis = createSelector(getVakersState, (state: State) =>
  selectAll(state)
);

export const getVakersEntities = createSelector(
  getVakersState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getVakersState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getVakersEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getRecompensas = createSelector(
  getVakersState,
  (state: State) => state.recompensas
);
export const getRecompensasIsLoading = createSelector(
  getVakersState,
  (state: State) => state.recompensasLoading
);
