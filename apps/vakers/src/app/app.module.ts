import { ShoppingCartModule } from './../../../../libs/shopping-cart/src/lib/shopping-cart.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';

// UI LIB Vaki
import { UiModule } from '@vaki-challenge/ui';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,

  MatCardModule,
];
// Firebase
import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LayoutComponent } from './layout/layout/layout.component';
import { metaReducers, ROOT_REDUCERS } from './+state';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    UiModule,

    ...MATERIAL_MODULES,

    ShoppingCartModule,

    // Firebase Module/Config
    AngularFireModule.initializeApp(environment.firebase),

    // STORE
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),

    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'Vaki: Financiamiento, müüücho más fácil',
          maxAge: 25,
          // In a production build you would want to disable the Store Devtools
          logOnly: environment.production,
        })
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
