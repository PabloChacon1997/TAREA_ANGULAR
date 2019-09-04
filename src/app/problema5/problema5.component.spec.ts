import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Problema5Component } from './problema5.component';

describe('Problema5Component', () => {
  let component: Problema5Component;
  let fixture: ComponentFixture<Problema5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Problema5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problema5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
