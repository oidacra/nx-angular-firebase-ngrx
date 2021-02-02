import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Recompensas } from '@vaki-challenge/interfaces';

@Component({
  selector: 'vaki-challenge-vaki-recompensa-card',
  templateUrl: './vaki-recompensa-card.component.html',
  styleUrls: ['./vaki-recompensa-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VakiRecompensaCardComponent {
  @Input()
  recompensas: Recompensas[];

  @Input()
  isLoading: boolean;

  @Output()
  addCart = new EventEmitter<Recompensas>();

  defaultQty = 1;

  addToCart(item: Recompensas) {
    const itemToAdd = {
      ...item,
      qty: this.defaultQty,
    };

    this.addCart.emit(itemToAdd);
  }
}
