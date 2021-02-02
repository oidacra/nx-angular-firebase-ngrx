import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ShoppingCartEffects } from './shopping-cart.effects';
import * as ShoppingCartActions from './shopping-cart.actions';

describe('ShoppingCartEffects', () => {
  let actions: Observable<any>;
  let effects: ShoppingCartEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ShoppingCartEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ShoppingCartEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ShoppingCartActions.init() });

      const expected = hot('-a-|', {
        a: ShoppingCartActions.loadShoppingCartSuccess({ shoppingCart: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
