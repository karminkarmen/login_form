import React from 'react';
import CheckboxInputContainerStyled from '../CheckboxInputContainerStyled';
import mountWithTheme from '../../../helpers/mountWithTheme';

describe('<CheckboxInputContainerStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<CheckboxInputContainerStyled />);
        expect(wrapper.html()).toMatchSnapshot();
    });

});
