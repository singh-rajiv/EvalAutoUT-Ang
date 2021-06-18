import { TestBed } from '@angular/core/testing';
import { MessageNewService } from './message-new.service';

describe('MessageNewService', () => {
  let service: MessageNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MessageNewService] });
    service = TestBed.inject(MessageNewService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
