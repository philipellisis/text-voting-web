import { TestBed } from '@angular/core/testing';

import { SurveyResultsServicesService } from './survey-results-services.service';

describe('SurveyResultsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyResultsServicesService = TestBed.get(SurveyResultsServicesService);
    expect(service).toBeTruthy();
  });
});
