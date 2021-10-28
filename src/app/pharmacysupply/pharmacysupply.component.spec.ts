import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacysupplyComponent } from './pharmacysupply.component';

describe('PharmacysupplyComponent', () => {
  let component: PharmacysupplyComponent;
  let fixture: ComponentFixture<PharmacysupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacysupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacysupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
