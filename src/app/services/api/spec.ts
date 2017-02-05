import {
  it,
  fit,
  describe,
  ddescribe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import {Api} from './index';

describe('Api Service', () => {

  beforeEachProviders(() => [Api]);

  it('should ...', inject([Api], (api:Api) => {
    expect(api.title).toBe('DutyApi');
  }));

  it('should have a getDuties function', inject([Api], (api:Api) => {
    expect(api.getDuties).toBeDefined();
  }));

  it('should have a addDuty function', inject([Api], (api:Api) => {
    expect(api.addDuty).toBeDefined();
  }));

  it('should have a getResidents function', inject([Api], (api:Api) => {
    expect(api.getResidents).toBeDefined();
  }));

  it('should have a getResidentReport function', inject([Api], (api:Api) => {
    expect(api.getResidentReport).toBeDefined();
  }));

  it('should have a getResidentReports function', inject([Api], (api:Api) => {
    expect(api.getResidentReports).toBeDefined();
  }));
});
