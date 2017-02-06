import {
  describe,
} from '@angular/core/testing';

import {Home} from './index';
import {Assert} from './../../../assert';

describe('Home', () => {
  let providers = [];
  let assert = new Assert<Home>(Home, providers);

  assert.it('should log ngOnInit', (component, element, fixture) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Home!');
  });
});
