import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import * as fromPokemonsReducer from './store/reducers/pokemons.reducer';
import { PokemonsEffects } from './store/effects/pokemons.effects';
import { effects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({pokemons: fromPokemonsReducer.reducer}),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
