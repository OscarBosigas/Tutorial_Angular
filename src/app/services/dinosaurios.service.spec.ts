import { TestBed } from '@angular/core/testing';

import { DinosauriosService } from './dinosaurios.service';

describe('DinosauriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinosauriosService = TestBed.get(DinosauriosService);
    expect(service).toBeTruthy();
  });
});
