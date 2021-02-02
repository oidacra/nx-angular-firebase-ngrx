import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SHOPPING_CART_FEATURE_KEY,
  State,
  ShoppingCartPartialState,
  shoppingCartAdapter,
} from './shopping-cart.reducer';

// Lookup the 'ShoppingCart' feature state managed by NgRx
export const getShoppingCartState = createFeatureSelector<
  ShoppingCartPartialState,
  State
>(SHOPPING_CART_FEATURE_KEY);

const {
  selectAll,
  selectEntities,
  selectTotal,
} = shoppingCartAdapter.getSelectors();

export const getShoppingCartLoaded = createSelector(
  getShoppingCartState,
  (state: State) => state.loaded
);

export const getShoppingCartError = createSelector(
  getShoppingCartState,
  (state: State) => state.error
);

export const getAllShoppingCart = createSelector(
  getShoppingCartState,
  (state: State) => selectAll(state)
);
export const getCountShoppingCart = createSelector(
  getShoppingCartState,
  (state: State) => selectTotal(state)
);

export const getShoppingCartEntities = createSelector(
  getShoppingCartState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getShoppingCartState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getShoppingCartEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
