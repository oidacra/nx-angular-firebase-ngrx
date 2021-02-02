import { VakersEntity } from './vakers.models';
import { State, vakersAdapter, initialState } from './vakers.reducer';
import * as VakersSelectors from './vakers.selectors';

describe('Vakers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getVakersId = (it) => it['id'];
  const createVakersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as VakersEntity);

  let state;

  beforeEach(() => {
    state = {
      vakers: vakersAdapter.setAll(
        [
          createVakersEntity('PRODUCT-AAA'),
          createVakersEntity('PRODUCT-BBB'),
          createVakersEntity('PRODUCT-CCC'),
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

  describe('Vakers Selectors', () => {
    it('getAllVakers() should return the list of Vakers', () => {
      const results = VakersSelectors.getAllVakers(state);
      const selId = getVakersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = VakersSelectors.getSelected(state);
      const selId = getVakersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getVakersLoaded() should return the current 'loaded' status", () => {
      const result = VakersSelectors.getVakersLoaded(state);

      expect(result).toBe(true);
    });

    it("getVakersError() should return the current 'error' state", () => {
      const result = VakersSelectors.getVakersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
