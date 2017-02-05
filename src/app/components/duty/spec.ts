import {Duty} from './index';
import {Assert} from '../../../assert';
import {
    describe
} from '@angular/core/testing';

describe('Duty', () => {

    let providers = [];
    let assert = new Assert < Duty > (Duty, providers);

    assert.it('should log ngOnInit', (component) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        component.ngOnInit();
        expect(console.log).toHaveBeenCalledWith('Duty!');
    });
});
