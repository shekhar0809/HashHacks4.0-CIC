import { TestBed } from '@angular/core/testing';

import { ProfileLinkService } from './profile-link.service';

describe('ProfileLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileLinkService = TestBed.get(ProfileLinkService);
    expect(service).toBeTruthy();
  });
});
