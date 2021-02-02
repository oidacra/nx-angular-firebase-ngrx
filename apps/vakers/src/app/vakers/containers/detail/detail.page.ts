import { getRecompensasIsLoading } from './../../+state/vakers.selectors';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { getSelected, getRecompensas } from '../../+state/vakers.selectors';
import { VakersService } from '../../services/vakers.service';
import { addItemToCart } from '@vaki-challenge/shopping-cart';
import { ActivatedRoute } from '@angular/router';
import { loadRecompensas } from '../../+state/vakers.actions';

@Component({
  selector: 'vaki-challenge-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPageComponent implements OnInit, OnDestroy {
  selectdVaki$ = this.store.select(getSelected);
  recompensas$ = this.store.select(getRecompensas);
  recompensaIsLoading$ = this.store.select(getRecompensasIsLoading);

  private sub: any;

  constructor(readonly store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const id = params['slug'];

      this.store.dispatch(loadRecompensas({ id }));
    });
  }
  addCart(item) {
    this.store.dispatch(addItemToCart({ item }));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
