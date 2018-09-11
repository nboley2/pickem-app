import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupSelectionComponent } from './matchup-selection.component';

describe('MatchupSelectionComponent', () => {
  let component: MatchupSelectionComponent;
  let fixture: ComponentFixture<MatchupSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
