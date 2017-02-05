import {Admin} from './index';
import {Assert} from '../../../assert';

describe('Admin', () => {

    let providers = [];
    let assert = new Assert < Admin > (Admin, providers);

    assert.it('should log ngOnInit', (component, element, fixture) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        component.ngOnInit();
        expect(console.log).toHaveBeenCalledWith('Admin!');
    });
});
