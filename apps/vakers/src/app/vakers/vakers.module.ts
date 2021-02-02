import { ShoppingCartModule } from '@vaki-challenge/shopping-cart';
import { VakersService } from './services/vakers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VakersRoutingModule } from './vakers-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromVakers from './+state/vakers.reducer';
import { VakersEffects } from './+state/vakers.effects';
import { ListPageComponent } from './containers/list/list.page';
import { DetailPageComponent } from './containers/detail/detail.page';
import { UiModule } from '@vaki-challenge/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailCartPageComponent } from './containers/detail-cart/detail-cart.component';

@NgModule({
  declarations: [
    ListPageComponent,
    DetailPageComponent,
    DetailCartPageComponent,
  ],
  imports: [
    CommonModule,
    VakersRoutingModule,
    ShoppingCartModule,
    UiModule,
    FlexLayoutModule,
    StoreModule.forFeature(fromVakers.VAKERS_FEATURE_KEY, fromVakers.reducer),
    EffectsModule.forFeature([VakersEffects]),
  ],
  providers: [VakersService],
})
export class VakersModule {}
