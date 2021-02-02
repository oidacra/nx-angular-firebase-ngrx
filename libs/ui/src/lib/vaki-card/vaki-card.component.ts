import { Vaki } from '@vaki-challenge/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'vaki-challenge-vaki-card',
  templateUrl: './vaki-card.component.html',
  styleUrls: ['./vaki-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VakiCardComponent {
  @Input()
  vaki: Vaki;

  @Output()
  selectedId = new EventEmitter<string>();

  selectVaki(id: string) {
    this.selectedId.emit(id);
  }
}
