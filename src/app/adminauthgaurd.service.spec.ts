import { TestBed } from '@angular/core/testing';

import { AdminauthgaurdService } from './adminauthgaurd.service';

describe('AdminauthgaurdService', () => {
  let service: AdminauthgaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthgaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
