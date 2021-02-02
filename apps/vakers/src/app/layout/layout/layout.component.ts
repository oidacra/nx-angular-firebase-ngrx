import { openSidebar, closeSidebar } from './../../+state/ui.actions';
import { getStatusSidebar } from './../../+state/ui.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSelected } from '../../vakers/+state/vakers.selectors';
import { getCountShoppingCart } from '@vaki-challenge/shopping-cart';
import { goToCart } from '../../vakers/+state/vakers.actions';

@Component({
  selector: 'vaki-challenge-layout',
  template: ` <vaki-challenge-top-bar
      (toggleSidebar)="toggleSideBar($event)"
      [isOpenSidebar]="isOpenSidebar$! | async"
      [qtycart]="qtyCart$ | async"
      (goToCart)="goToCart()"
    ></vaki-challenge-top-bar>

    <div class="navbar-container" fxLayout="row">
      <div fxFlex="30" fxFlexAlign="center" fxFlex.lt-sm="100">
        <!--   <ng-container *ngIf="selectdVaki$ | async as selectedVaki">
            <h1>{{ selectedVaki.name }}</h1>
          </ng-container> -->
      </div>
      <div fxFlex fxFlex.lt-sm="100">
        <vaki-challenge-navbar></vaki-challenge-navbar>
      </div>
    </div>

    <vaki-challenge-drawer-menu [isOpenSidebar]="isOpenSidebar$! | async">
      <router-outlet></router-outlet>
    </vaki-challenge-drawer-menu>`,
  styleUrls: ['layout.component.scss'],
})
export class LayoutComponent {
  isOpenSidebar$ = this.store.select(getStatusSidebar);
  selectdVaki$ = this.store.select(getSelected);
  qtyCart$ = this.store.select(getCountShoppingCart);

  constructor(readonly store: Store) {}

  toggleSideBar(isOpenSidebar: boolean) {
    if (isOpenSidebar) {
      this.store.dispatch(closeSidebar({ isOpenSidebar: isOpenSidebar }));
    } else {
      this.store.dispatch(openSidebar({ isOpenSidebar: isOpenSidebar }));
    }
  }

  goToCart() {
    this.store.dispatch(goToCart());
  }
}
