import React from 'react';
import mountWithTheme from '../../../helpers/mountWithTheme';
import FormMainContainerStyled from '../FormMainContainerStyled';

describe('<FormMainContainerStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<FormMainContainerStyled />);
        expect(wrapper.html()).toMatchSnapshot();
    });

});
