import React from 'react';
import mountWithTheme from '../../../helpers/mountWithTheme';
import AuthenticationBoxMainContainerStyled from '../AuthenticationBoxMainContainerStyled';

describe('<AuthenticationBoxMainContainerStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<AuthenticationBoxMainContainerStyled />);
        expect(wrapper.html()).toMatchSnapshot();
    });

});
