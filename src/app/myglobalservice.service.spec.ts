import { TestBed, inject } from '@angular/core/testing';

import { MyglobalserviceService } from './myglobalservice.service';

describe('MyglobalserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyglobalserviceService]
    });
  });

  it('should be created', inject([MyglobalserviceService], (service: MyglobalserviceService) => {
    expect(service).toBeTruthy();
  }));
});
