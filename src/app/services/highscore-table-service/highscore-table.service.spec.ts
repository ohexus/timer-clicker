import { TestBed } from '@angular/core/testing';

import { HighscoreTableService } from './highscore-table.service';

describe('HighscoreTableService', () => {
  let service: HighscoreTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighscoreTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
