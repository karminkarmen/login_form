import React from 'react';
import { shallow } from 'enzyme';

import LoginConfirmation from '../LoginConfirmation';
import ParagraphStyled from '../../common/ParagraphStyled';
import messages from '../../../constants/messagesConsts';
import TickStyled from '../TickStyled';

describe('<LoginConfirmation />', () => {

    it('matches snapshot', () => {
        const wrapper = shallow(<LoginConfirmation />);
        expect(wrapper.debug()).toMatchSnapshot();
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

        expect(wrapper.find(TickStyled)).toHaveLength(1);
    });

});
