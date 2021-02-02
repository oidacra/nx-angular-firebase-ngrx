import { ShoppingCartEntity } from './shopping-cart.models';
import * as ShoppingCartActions from './shopping-cart.actions';
import { State, initialState, reducer } from './shopping-cart.reducer';

describe('ShoppingCart Reducer', () => {
  const createShoppingCartEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ShoppingCartEntity);

  beforeEach(() => {});

  describe('valid ShoppingCart actions', () => {
    it('loadShoppingCartSuccess should return set the list of known ShoppingCart', () => {
      const shoppingCart = [
        createShoppingCartEntity('PRODUCT-AAA'),
        createShoppingCartEntity('PRODUCT-zzz'),
      ];
      const action = ShoppingCartActions.loadShoppingCartSuccess({
        shoppingCart,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
