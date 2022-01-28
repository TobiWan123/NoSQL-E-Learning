import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KapitelComponent } from './kapitel.component';

describe('KapitelComponent', () => {
  let component: KapitelComponent;
  let fixture: ComponentFixture<KapitelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KapitelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KapitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
