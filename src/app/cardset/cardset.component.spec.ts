import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsetComponent } from './cardset.component';

describe('CardsetComponent', () => {
  let component: CardsetComponent;
  let fixture: ComponentFixture<CardsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
