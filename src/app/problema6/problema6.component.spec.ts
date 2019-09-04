import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Problema6Component } from './problema6.component';

describe('Problema6Component', () => {
  let component: Problema6Component;
  let fixture: ComponentFixture<Problema6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Problema6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problema6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
