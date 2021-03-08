import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PaginatedPokemon } from "../models/pokemon.type";

@Injectable({ providedIn: "root" })
export class PokemonService {

  baseUrl = 'https://pokeapi.co/api/v2';//type/normal?offset=29&limit=11
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private readonly httpClient: HttpClient) { }

  getPokemon(offset = 0): Observable<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/pokemon?offset=${offset}&limit=11`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        map(pokemon => {
          return pokemon.map((poke, index) => {
            poke.pokeIndex = offset + index + 1;
            return poke;
          });
        })
      );
  }

  getPokeDetails(index) {
    return this.httpClient.get(`${this.baseUrl}/pokemon/${index}`).pipe(
      map(poke => {
        poke['imageFirst'] = poke['sprites']['front_default'];
        poke['imageSecond'] = poke['sprites']['front_shiny'];
        return poke;
      })
    );
  }

  getPokemonTypes() {
    return this.httpClient.get<any>(`${this.baseUrl}/type`).pipe(
      map(poke => poke['results'])
    )
  }

  serchPokemonsByType(searchType:string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/type/${searchType}`).pipe(
      map(poke => poke['pokemon'].map(poke => poke['pokemon']))
    )
  }
}
