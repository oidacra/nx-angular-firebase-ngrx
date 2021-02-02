import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllShoppingCart } from '@vaki-challenge/shopping-cart';

@Component({
  selector: 'vaki-challenge-detail-cart-page',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.scss'],
})
export class DetailCartPageComponent {
  cartItems$ = this.store.select(getAllShoppingCart);
  constructor(readonly store: Store) {}
}
