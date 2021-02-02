import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiRecompensaCardComponent } from './vaki-recompensa-card.component';

describe('VakiRecompensaCardComponent', () => {
  let component: VakiRecompensaCardComponent;
  let fixture: ComponentFixture<VakiRecompensaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiRecompensaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiRecompensaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
