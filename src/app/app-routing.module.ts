import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';

const routes: Routes = [
  {
    path: '', component: PokemonsListComponent,
  },
  {
    path: 'details/:id', component: PokemonDetailsComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
