import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFailureComponent } from './app-failure.component';

describe('AppFailureComponent', () => {
  let component: AppFailureComponent;
  let fixture: ComponentFixture<AppFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFailureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
