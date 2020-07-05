import React from 'react';
import mountWithTheme from '../../../helpers/mountWithTheme';
import LoginButtonStyled from '../LoginButtonStyled';

describe('<LoginButtonStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<LoginButtonStyled />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('renders input with proper value and type', () => {
        const wrapper = mountWithTheme(<LoginButtonStyled />);

        expect(wrapper.find(`input[type='submit']`)).toHaveLength(1);
        expect(wrapper.find(`input[value='login']`)).toHaveLength(1);
    });

});
