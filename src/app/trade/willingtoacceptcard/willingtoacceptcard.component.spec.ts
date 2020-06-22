import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingtoacceptcardComponent } from './willingtoacceptcard.component';

describe('WillingtoacceptcardComponent', () => {
  let component: WillingtoacceptcardComponent;
  let fixture: ComponentFixture<WillingtoacceptcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillingtoacceptcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillingtoacceptcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
