import React from 'react';
import { shallow } from 'enzyme';

import LoginConfirmation, { StyledTick } from './LoginConfirmation';
import ParagraphStyled from '../common/ParagraphStyled';
import messages from '../../constants/messagesConsts';

describe('<LoginConfirmation />', () => {

    it('matches snapshot', () => {
        const formattingButtons = shallow(<LoginConfirmation />);
        expect(formattingButtons.debug()).toMatchSnapshot();
    });
    
    it('should render styled paragraph', () => {
        const wrapper = shallow(<LoginConfirmation />);

        expect(wrapper.find(ParagraphStyled)).toHaveLength(1);
    });

    it('should render styled paragraph with login confirmation message', () => {
        const wrapper = shallow(<LoginConfirmation />);

        const label = wrapper.find(ParagraphStyled);
        expect(label.text()).toEqual(messages.loggedInConfirmationInfo);
    });

    it('should render styled tick icon', () => {
        const wrapper = shallow(<LoginConfirmation />);

        expect(wrapper.find(StyledTick)).toHaveLength(1);
    });

});
