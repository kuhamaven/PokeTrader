import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularcardComponent } from './popularcard.component';

describe('PopularcardComponent', () => {
  let component: PopularcardComponent;
  let fixture: ComponentFixture<PopularcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
