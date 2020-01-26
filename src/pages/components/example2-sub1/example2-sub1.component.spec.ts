import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2Sub1Component } from './example2-sub1.component';

describe('Example2Sub1Component', () => {
  let component: Example2Sub1Component;
  let fixture: ComponentFixture<Example2Sub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example2Sub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2Sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
