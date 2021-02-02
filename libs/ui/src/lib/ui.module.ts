import { ShoppingCartModule } from '@vaki-challenge/shopping-cart';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

import { TopBarComponent } from './top-bar/top-bar.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { VakiCardComponent } from './vaki-card/vaki-card.component';
import { VakiCardDetailComponent } from './vaki-card-detail/vaki-card-detail.component';
import { VakiRecompensaCardComponent } from './vaki-recompensa-card/vaki-recompensa-card.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,

    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,

    ShoppingCartModule,
  ],
  declarations: [
    NavbarComponent,
    TopBarComponent,
    DrawerMenuComponent,
    VakiCardComponent,
    VakiCardDetailComponent,
    VakiRecompensaCardComponent,
  ],
  exports: [
    NavbarComponent,
    TopBarComponent,
    DrawerMenuComponent,
    VakiCardComponent,
    VakiCardDetailComponent,
    VakiRecompensaCardComponent,
  ],
})
export class UiModule {}
