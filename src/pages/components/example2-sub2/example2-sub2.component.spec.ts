import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2Sub2Component } from './example2-sub2.component';

describe('Example2Sub2Component', () => {
  let component: Example2Sub2Component;
  let fixture: ComponentFixture<Example2Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example2Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
