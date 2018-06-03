import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });
import Markets from '../../Components/Markets'

test('Markets', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Markets />).find('container').exists()).toBe(true);
    });

    it('renders trading markets', () => {
        expect(shallow(<Markets />).find('#tBTCUSD').length).toEqual(1);
        expect(shallow(<Markets />).find('#tLTCUSD').length).toEqual(1);
        expect(shallow(<Markets />).find('#tETHUSD').length).toEqual(1);
    });

    it('renders funding markets', () => {
        expect(shallow(<Markets />).find('#fUSD').length).toEqual(1);
        expect(shallow(<Markets />).find('#fBTC').length).toEqual(1);
    })
});
