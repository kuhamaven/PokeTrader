import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchuserCardComponent } from './searchuser-card.component';

describe('SearchuserCardComponent', () => {
  let component: SearchuserCardComponent;
  let fixture: ComponentFixture<SearchuserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchuserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchuserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
