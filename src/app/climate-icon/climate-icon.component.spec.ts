import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateIconComponent } from './climate-icon.component';

describe('ClimateIconComponent', () => {
  let component: ClimateIconComponent;
  let fixture: ComponentFixture<ClimateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
