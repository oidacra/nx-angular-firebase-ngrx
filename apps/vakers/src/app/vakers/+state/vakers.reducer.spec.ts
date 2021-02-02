import { VakersEntity } from './vakers.models';
import * as VakersActions from './vakers.actions';
import { State, initialState, reducer } from './vakers.reducer';

describe('Vakers Reducer', () => {
  const createVakersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as VakersEntity);

  beforeEach(() => {});

  describe('valid Vakers actions', () => {
    it('loadVakersSuccess should return set the list of known Vakers', () => {
      const vakers = [
        createVakersEntity('PRODUCT-AAA'),
        createVakersEntity('PRODUCT-zzz'),
      ];
      const action = VakersActions.loadVakersSuccess({ vakers });

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
