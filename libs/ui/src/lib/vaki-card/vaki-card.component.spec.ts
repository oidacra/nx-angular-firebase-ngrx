import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiCardComponent } from './vaki-card.component';

describe('VakiCardComponent', () => {
  let component: VakiCardComponent;
  let fixture: ComponentFixture<VakiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
