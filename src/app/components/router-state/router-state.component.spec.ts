import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterStateComponent } from './router-state.component';

describe('RouterStateComponent', () => {
  let component: RouterStateComponent;
  let fixture: ComponentFixture<RouterStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
