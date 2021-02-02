import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ShoppingCartActions from './shopping-cart.actions';
import { ShoppingCartEntity } from './shopping-cart.models';

export const SHOPPING_CART_FEATURE_KEY = 'shoppingCart';

export interface State extends EntityState<ShoppingCartEntity> {
  selectedId?: string | number; // which ShoppingCart record has been selected
  loaded: boolean; // has the ShoppingCart list been loaded
  error?: string | null; // last known error (if any)
}

export interface ShoppingCartPartialState {
  readonly [SHOPPING_CART_FEATURE_KEY]: State;
}

export const shoppingCartAdapter: EntityAdapter<ShoppingCartEntity> = createEntityAdapter<ShoppingCartEntity>();

export const initialState: State = shoppingCartAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const shoppingCartReducer = createReducer(
  initialState,
  on(ShoppingCartActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ShoppingCartActions.loadShoppingCartSuccess, (state, { shoppingCart }) =>
    shoppingCartAdapter.setAll(shoppingCart, { ...state, loaded: true })
  ),
  on(ShoppingCartActions.loadShoppingCartFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ShoppingCartActions.addItemToCart, (state, { item }) => {
    return shoppingCartAdapter.addOne(item, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return shoppingCartReducer(state, action);
}
