import React from 'react';
import TickStyled from '../TickStyled';
import mountWithTheme from '../../../helpers/mountWithTheme';

describe('<TickStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<TickStyled />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

});
