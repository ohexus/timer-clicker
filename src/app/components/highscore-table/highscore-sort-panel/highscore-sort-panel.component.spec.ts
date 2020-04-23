import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreSortPanelComponent } from './highscore-sort-panel.component';

describe('HighscoreSortPanelComponent', () => {
  let component: HighscoreSortPanelComponent;
  let fixture: ComponentFixture<HighscoreSortPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighscoreSortPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreSortPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
