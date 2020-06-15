import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradecomponentComponent } from './tradecomponent.component';

describe('TradecomponentComponent', () => {
  let component: TradecomponentComponent;
  let fixture: ComponentFixture<TradecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
