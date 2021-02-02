import { VakersService } from './../services/vakers.service';
import { Recompensas, Vaki } from '@vaki-challenge/interfaces';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as VakersFeature from './vakers.reducer';
import * as VakersActions from './vakers.actions';

import { tap, map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class VakersEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VakersActions.init),
      fetch({
        run: (action) => {
          return this.vakisService
            .getAll()
            .pipe(
              map((vakis: Vaki[]) =>
                VakersActions.loadVakersSuccess({ vakers: vakis })
              )
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return VakersActions.loadVakersFailure({ error });
        },
      })
    )
  );

  recompensas$ = createEffect(() =>
    this.actions$.pipe(
      // Filters by Action Creator 'login'
      ofType(VakersActions.loadRecompensas),
      tap((action) => console.log(action)),
      switchMap((action) =>
        this.vakisService.getRecompensasByVaki(action.id).pipe(
          map(
            (recompensas) =>
              VakersActions.loadRecompensasSuccess({
                recompensas,
              }),
            catchError((error) =>
              of(VakersActions.loadRecompensasFailure({ error }))
            )
          )
        )
      )
    )
  );

  // Pages
  goToVakiPage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(VakersActions.selectVaki),
        // Change the :id to slug of the vaki
        tap((action) => this.router.navigate(['/vaki/', action.id]))
      );
    },
    { dispatch: false }
  );
  goToCartPage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(VakersActions.goToCart),
        tap(() => this.router.navigate(['/vaki/cart']))
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private vakisService: VakersService,
    private router: Router
  ) {}
}
