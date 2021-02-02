import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vaki-challenge-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerMenuComponent {
  @Input()
  isOpenSidebar: boolean;
}
