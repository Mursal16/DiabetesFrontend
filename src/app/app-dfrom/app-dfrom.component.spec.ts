import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDfromComponent } from './app-dfrom.component';

describe('AppDfromComponent', () => {
  let component: AppDfromComponent;
  let fixture: ComponentFixture<AppDfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
