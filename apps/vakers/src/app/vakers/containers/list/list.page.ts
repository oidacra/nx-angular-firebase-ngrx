import { deselectVaki } from './../../+state/vakers.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { VakersService } from '../../services/vakers.service';
import { init, selectVaki } from '../../+state/vakers.actions';

@Component({
  selector: 'vaki-challenge-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPageComponent implements OnInit {
  vakis$ = this.vakisService.vakis$;
  constructor(private vakisService: VakersService, readonly store: Store) {}
  ngOnInit() {
    this.store.dispatch(deselectVaki());
  }
  selectedVaki(id: string) {
    this.store.dispatch(selectVaki({ id }));
  }
}
