import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakersComponent } from './vakers.component';

describe('VakersComponent', () => {
  let component: VakersComponent;
  let fixture: ComponentFixture<VakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
