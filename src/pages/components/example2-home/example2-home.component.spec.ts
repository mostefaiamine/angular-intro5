import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2HomeComponent } from './example2-home.component';

describe('Example2HomeComponent', () => {
  let component: Example2HomeComponent;
  let fixture: ComponentFixture<Example2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
