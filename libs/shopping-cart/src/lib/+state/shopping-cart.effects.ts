import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ShoppingCartFeature from './shopping-cart.reducer';
import * as ShoppingCartActions from './shopping-cart.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ShoppingCartEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ShoppingCartActions.loadShoppingCartSuccess({
            shoppingCart: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ShoppingCartActions.loadShoppingCartFailure({ error });
        },
      })
    )
  );

  addedToCart$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ShoppingCartActions.addItemToCart),
        tap(() =>
          this._snackBar.open('Agregada recompensa al carrito...', 'Cerrar', {
            duration: 2000,
          })
        )
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private _snackBar: MatSnackBar) {}
}
