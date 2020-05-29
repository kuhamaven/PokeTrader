import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmakerComponent } from './cardmaker.component';

describe('CardmakerComponent', () => {
  let component: CardmakerComponent;
  let fixture: ComponentFixture<CardmakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardmakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
