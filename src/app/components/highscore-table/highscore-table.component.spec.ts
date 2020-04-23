import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreTableComponent } from './highscore-table.component';

describe('HighscoreTableComponent', () => {
  let component: HighscoreTableComponent;
  let fixture: ComponentFixture<HighscoreTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighscoreTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
