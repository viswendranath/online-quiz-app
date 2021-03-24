import { TestBed } from '@angular/core/testing';

import { AnswersTransferService } from './answers-transfer.service';

describe('AnswersTransferService', () => {
  let service: AnswersTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswersTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
