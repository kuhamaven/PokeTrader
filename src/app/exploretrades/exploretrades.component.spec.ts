import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploretradesComponent } from './exploretrades.component';

describe('ExploretradesComponent', () => {
  let component: ExploretradesComponent;
  let fixture: ComponentFixture<ExploretradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploretradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploretradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
