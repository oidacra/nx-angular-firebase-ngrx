import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiCardDetailComponent } from './vaki-card-detail.component';

describe('VakiCardDetailComponent', () => {
  let component: VakiCardDetailComponent;
  let fixture: ComponentFixture<VakiCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
