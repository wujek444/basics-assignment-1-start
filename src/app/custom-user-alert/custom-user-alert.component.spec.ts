import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUserAlertComponent } from './custom-user-alert.component';

describe('CustomUserAlertComponent', () => {
  let component: CustomUserAlertComponent;
  let fixture: ComponentFixture<CustomUserAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomUserAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUserAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
