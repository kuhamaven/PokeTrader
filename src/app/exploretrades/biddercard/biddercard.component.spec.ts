import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddercardComponent } from './biddercard.component';

describe('BiddercardComponent', () => {
  let component: BiddercardComponent;
  let fixture: ComponentFixture<BiddercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
