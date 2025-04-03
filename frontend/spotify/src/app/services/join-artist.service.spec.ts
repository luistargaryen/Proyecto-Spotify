import { TestBed } from '@angular/core/testing';

import { JoinArtistService } from './join-artist.service';

describe('JoinArtistService', () => {
  let service: JoinArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
