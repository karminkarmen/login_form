import React from 'react';
import mountWithTheme from '../../../helpers/mountWithTheme';
import LoginButtonContainerStyled from '../LoginButtonContainerStyled';

describe('<LoginButtonContainerStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<LoginButtonContainerStyled />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

});
