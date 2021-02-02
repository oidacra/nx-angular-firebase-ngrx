import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
interface currencies {
  value: string;
  label: string;
}
@Component({
  selector: 'vaki-challenge-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  @Input()
  isOpenSidebar: boolean;

  @Input()
  qtycart: number;

  @Output()
  toggleSidebar = new EventEmitter<boolean>();

  @Output()
  goToCart = new EventEmitter();

  selectedLenguage = 'es';
  selectedCurrency = 'usd';
  optionsCurrencies: currencies[] = [
    { value: 'usd', label: 'USD' },
    { value: 'ars', label: 'ARS' },
    { value: 'brl', label: 'BRL' },
    { value: 'clp', label: 'CLP' },
  ];
  changeLanguage(newLenguage: string) {
    this.selectedLenguage = newLenguage;
  }
  changeCurrency(newCurrency: string) {
    this.selectedCurrency = newCurrency;
  }
  toggleSidebarBtn() {
    this.toggleSidebar.emit(this.isOpenSidebar);
  }

  goToCartEvent() {
    this.goToCart.emit();
  }
}
