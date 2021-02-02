import { ShoppingCartEntity } from './shopping-cart.models';
import {
  State,
  shoppingCartAdapter,
  initialState,
} from './shopping-cart.reducer';
import * as ShoppingCartSelectors from './shopping-cart.selectors';

describe('ShoppingCart Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getShoppingCartId = (it) => it['id'];
  const createShoppingCartEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ShoppingCartEntity);

  let state;

  beforeEach(() => {
    state = {
      shoppingCart: shoppingCartAdapter.setAll(
        [
          createShoppingCartEntity('PRODUCT-AAA'),
          createShoppingCartEntity('PRODUCT-BBB'),
          createShoppingCartEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ShoppingCart Selectors', () => {
    it('getAllShoppingCart() should return the list of ShoppingCart', () => {
      const results = ShoppingCartSelectors.getAllShoppingCart(state);
      const selId = getShoppingCartId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ShoppingCartSelectors.getSelected(state);
      const selId = getShoppingCartId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getShoppingCartLoaded() should return the current 'loaded' status", () => {
      const result = ShoppingCartSelectors.getShoppingCartLoaded(state);

      expect(result).toBe(true);
    });

    it("getShoppingCartError() should return the current 'error' state", () => {
      const result = ShoppingCartSelectors.getShoppingCartError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
