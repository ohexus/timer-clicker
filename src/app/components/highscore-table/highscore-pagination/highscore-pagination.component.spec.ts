import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscorePaginationComponent } from './highscore-pagination.component';

describe('HighscorePaginationComponent', () => {
  let component: HighscorePaginationComponent;
  let fixture: ComponentFixture<HighscorePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighscorePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscorePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
