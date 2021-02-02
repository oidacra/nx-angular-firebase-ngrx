import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { VakersEffects } from './vakers.effects';
import * as VakersActions from './vakers.actions';

describe('VakersEffects', () => {
  let actions: Observable<any>;
  let effects: VakersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        VakersEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(VakersEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: VakersActions.init() });

      const expected = hot('-a-|', {
        a: VakersActions.loadVakersSuccess({ vakers: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
