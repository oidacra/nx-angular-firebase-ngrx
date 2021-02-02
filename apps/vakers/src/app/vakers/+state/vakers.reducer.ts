import { Recompensas, Vaki } from '@vaki-challenge/interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as VakersActions from './vakers.actions';

export const VAKERS_FEATURE_KEY = 'vakers';

export interface State extends EntityState<Vaki> {
  selectedId?: string | number; // which Vakers record has been selected
  loaded: boolean; // has the Vakers list been loaded
  error?: string | null; // last known error (if any)
  recompensasLoading: boolean;
  recompensas: Recompensas[];
}

export interface VakersPartialState {
  readonly [VAKERS_FEATURE_KEY]: State;
}

export const vakersAdapter: EntityAdapter<Vaki> = createEntityAdapter<Vaki>();

export const initialState: State = vakersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  recompensasLoading: false,
  recompensas: [],
});

const vakersReducer = createReducer(
  initialState,
  on(VakersActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
    selectedId: undefined,
    recompensas: [],
    recompensasLoading: false,
  })),

  on(VakersActions.loadVakersSuccess, (state, { vakers }) =>
    vakersAdapter.setAll(vakers, { ...state, loaded: true })
  ),
  on(VakersActions.loadVakersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // Selected
  on(VakersActions.selectVaki, (state, action) => ({
    ...state,
    selectedId: action.id,
  })),
  on(VakersActions.deselectVaki, (state, action) => ({
    ...state,
    selectedId: undefined,
    recompensas: [],
  })),
  // Recompensas
  on(VakersActions.loadRecompensas, (state) => ({
    ...state,
    recompensasLoading: true,
    recompensas: [],
    error: null,
  })),
  on(VakersActions.loadRecompensasSuccess, (state, { recompensas }) => ({
    ...state,
    recompensasLoading: false,
    recompensas: recompensas,
    error: null,
  })),
  on(VakersActions.loadRecompensasFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return vakersReducer(state, action);
}
