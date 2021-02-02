import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vaki-challenge-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  links = ['Resumen', 'Recompensas', 'Historia', 'Progreso', 'Vakers'];
  activeLink = this.links[0];
}
