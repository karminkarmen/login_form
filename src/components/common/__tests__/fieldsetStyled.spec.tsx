import React from 'react';
import FieldsetStyled from '../FieldsetStyled';
import mountWithTheme from '../../../helpers/mountWithTheme';

describe('<FieldsetStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<FieldsetStyled />);
        expect(wrapper.html()).toMatchSnapshot();
    });

});
