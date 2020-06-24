import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidcreatorcomponentComponent } from './bidcreatorcomponent.component';

describe('BidcreatorcomponentComponent', () => {
  let component: BidcreatorcomponentComponent;
  let fixture: ComponentFixture<BidcreatorcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidcreatorcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidcreatorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
