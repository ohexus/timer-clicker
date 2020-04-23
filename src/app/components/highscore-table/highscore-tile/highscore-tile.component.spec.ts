import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreTileComponent } from './highscore-tile.component';

describe('HighscoreTileComponent', () => {
  let component: HighscoreTileComponent;
  let fixture: ComponentFixture<HighscoreTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighscoreTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
