import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerComponent } from './flicker.component';

describe('FlickerComponent', () => {
  let component: FlickerComponent;
  let fixture: ComponentFixture<FlickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
