/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RiddlesService } from './riddles.service';

describe('RiddlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiddlesService]
    });
  });

  it('should ...', inject([RiddlesService], (service: RiddlesService) => {
    expect(service).toBeTruthy();
  }));
});
