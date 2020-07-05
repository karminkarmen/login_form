import React from 'react';
import FormStructureStyled from '../FormStructureStyled';
import mountWithTheme from '../../../helpers/mountWithTheme';

describe('<FormStructureStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<FormStructureStyled />);
        expect(wrapper.html()).toMatchSnapshot();
    });

});
