import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvilComponent } from './invil.component';

describe('InvilComponent', () => {
  let component: InvilComponent;
  let fixture: ComponentFixture<InvilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
