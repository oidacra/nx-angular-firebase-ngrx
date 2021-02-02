import { ListPageComponent } from './containers/list/list.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './containers/detail/detail.page';
import { DetailCartPageComponent } from './containers/detail-cart/detail-cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'list',
    component: ListPageComponent,
    data: { title: 'Vakis', state: 'list-vakis' },
  },
  {
    path: 'cart',
    component: DetailCartPageComponent,
    data: { title: 'Cart', state: 'cart-vaki' },
  },
  {
    path: ':slug',
    component: DetailPageComponent,
    data: { title: 'Vaki', state: 'detail-vaki' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VakersRoutingModule {}
