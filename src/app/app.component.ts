import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { PokemonService } from './core/services/pokemon.service';
import { getIsLoadingSelector } from './store/selectors/common.selector';
import { AppState } from './store/state/state';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //@ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  isLoading$: Observable<boolean>= of(false);

  constructor( private store$: Store<AppState>) {
    this.isLoading$ = this.store$.pipe(select(getIsLoadingSelector)).pipe(debounceTime(200));
  }

}
