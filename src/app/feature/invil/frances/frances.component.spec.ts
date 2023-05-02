import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancesComponent } from './frances.component';

describe('FrancesComponent', () => {
  let component: FrancesComponent;
  let fixture: ComponentFixture<FrancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
