import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromShoppingCart from './+state/shopping-cart.reducer';
import { ShoppingCartEffects } from './+state/shopping-cart.effects';
import { IconCartComponent } from './icon-cart/icon-cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailCartComponent } from './detail-cart/detail-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,

    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,

    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(
      fromShoppingCart.SHOPPING_CART_FEATURE_KEY,
      fromShoppingCart.reducer
    ),
    EffectsModule.forFeature([ShoppingCartEffects]),
  ],
  declarations: [IconCartComponent, DetailCartComponent],
  exports: [IconCartComponent, DetailCartComponent],
})
export class ShoppingCartModule {}
