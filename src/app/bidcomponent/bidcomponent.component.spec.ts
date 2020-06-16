import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidcomponentComponent } from './bidcomponent.component';

describe('BidcomponentComponent', () => {
  let component: BidcomponentComponent;
  let fixture: ComponentFixture<BidcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
