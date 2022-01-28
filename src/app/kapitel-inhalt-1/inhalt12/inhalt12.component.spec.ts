import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inhalt12Component } from './inhalt12.component';

describe('Inhalt12Component', () => {
  let component: Inhalt12Component;
  let fixture: ComponentFixture<Inhalt12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inhalt12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inhalt12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
