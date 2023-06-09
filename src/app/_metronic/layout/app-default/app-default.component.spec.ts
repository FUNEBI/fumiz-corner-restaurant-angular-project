import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDefaultComponent } from './app-default.component';

describe('AppDefaultComponent', () => {
  let component: AppDefaultComponent;
  let fixture: ComponentFixture<AppDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
