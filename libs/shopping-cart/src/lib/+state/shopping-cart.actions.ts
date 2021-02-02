import { createAction, props } from '@ngrx/store';
import { ShoppingCartEntity } from './shopping-cart.models';

export const init = createAction('[ShoppingCart Page] Init');

export const loadShoppingCartSuccess = createAction(
  '[ShoppingCart/API] Load ShoppingCart Success',
  props<{ shoppingCart: ShoppingCartEntity[] }>()
);

export const loadShoppingCartFailure = createAction(
  '[ShoppingCart/API] Load ShoppingCart Failure',
  props<{ error: any }>()
);

export const addItemToCart = createAction(
  '[ShoppingCart/API] Add item to cart',
  props<{ item: ShoppingCartEntity }>()
);
