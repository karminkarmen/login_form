import React from 'react';
import mountWithTheme from '../../../helpers/mountWithTheme';
import ParagraphStyled from '../ParagraphStyled';

describe('<ParagraphStyled />', () => {

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<ParagraphStyled />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

});
