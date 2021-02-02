import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'vaki-challenge-icon-cart',
  templateUrl: './icon-cart.component.html',
  styleUrls: ['./icon-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCartComponent {
  @Input()
  qty: number;

  @Output()
  goToCart = new EventEmitter();

  goToCartButton() {
    this.goToCart.emit();
  }
}
