import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradecreatorComponent } from './tradecreator.component';

describe('TradecreatorComponent', () => {
  let component: TradecreatorComponent;
  let fixture: ComponentFixture<TradecreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradecreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
