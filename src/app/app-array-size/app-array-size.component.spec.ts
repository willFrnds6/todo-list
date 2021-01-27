import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppArraySizeComponent } from './app-array-size.component';

describe('AppArraySizeComponent', () => {
  let component: AppArraySizeComponent;
  let fixture: ComponentFixture<AppArraySizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppArraySizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppArraySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
