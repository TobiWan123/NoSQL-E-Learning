import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inhalt11Component } from './inhalt11.component';

describe('Inhalt11Component', () => {
  let component: Inhalt11Component;
  let fixture: ComponentFixture<Inhalt11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inhalt11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inhalt11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
