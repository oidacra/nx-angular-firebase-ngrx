import { createAction, props } from '@ngrx/store';
import { Recompensas, Vaki } from '@vaki-challenge/interfaces';

export const init = createAction('[Vaki Page] Init');

export const loadVakis = createAction('[Vaki/API] Load Vakis');

export const loadVakersSuccess = createAction(
  '[Vaki/API] Load Vakis Success',
  props<{ vakers: Vaki[] }>()
);
export const loadVakersFailure = createAction(
  '[Vaki/API] Load Vakis Failure',
  props<{ error: string }>()
);

// Select Vaki
export const selectVaki = createAction(
  '[Vaki] Go to selected vaki',
  props<{ id }>()
);
export const deselectVaki = createAction('[Vaki] deselected vaki');
// Get all recompensas
export const loadRecompensas = createAction(
  '[Vaki] Get recompensas by Vaki',
  props<{ id: string }>()
);
export const loadRecompensasSuccess = createAction(
  '[Vaki/API] Load recompensas Success',
  props<{ recompensas: Recompensas[] }>()
);
export const loadRecompensasFailure = createAction(
  '[Vaki/API] Load recompensas Failure',
  props<{ error: string }>()
);

// Go to cart
export const goToCart = createAction('[Vaki - Page] Go to cart page');
