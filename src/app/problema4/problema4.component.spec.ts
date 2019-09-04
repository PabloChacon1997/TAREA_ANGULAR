import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Problema4Component } from './problema4.component';

describe('Problema4Component', () => {
  let component: Problema4Component;
  let fixture: ComponentFixture<Problema4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Problema4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problema4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
