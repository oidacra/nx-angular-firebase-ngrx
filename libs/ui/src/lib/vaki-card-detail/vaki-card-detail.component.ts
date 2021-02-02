import { Vaki } from '@vaki-challenge/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { currencies } from '@vaki-challenge/interfaces';
@Component({
  selector: 'vaki-challenge-vaki-card-detail',
  templateUrl: './vaki-card-detail.component.html',
  styleUrls: ['./vaki-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VakiCardDetailComponent {
  @Input()
  vaki: Vaki;

  optionsCurrencies: currencies[] = [
    { value: 'usd', label: 'USD' },
    { value: 'ars', label: 'ARS' },
    { value: 'brl', label: 'BRL' },
    { value: 'clp', label: 'CLP' },
  ];
}
