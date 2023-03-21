import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumTimeComponent } from './sum-time.component';

describe('SumTimeComponent', () => {
  let component: SumTimeComponent;
  let fixture: ComponentFixture<SumTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
