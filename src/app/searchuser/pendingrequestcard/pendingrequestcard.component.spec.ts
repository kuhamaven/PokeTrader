import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingrequestcardComponent } from './pendingrequestcard.component';

describe('PendingrequestcardComponent', () => {
  let component: PendingrequestcardComponent;
  let fixture: ComponentFixture<PendingrequestcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingrequestcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingrequestcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
