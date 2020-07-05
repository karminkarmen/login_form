import React from 'react';
import { shallow } from 'enzyme';

import FormStructure from '../FormStructure';
import { LoginStatus } from '../../../constants/statusesConsts';
import TextInput from '../../TextInput/TextInput';
import CheckboxInput from '../../CheckboxInput/CheckboxInput';
import ParagraphStyled from '../../common/ParagraphStyled';
import messages from '../../../constants/messagesConsts';

describe('<FormStructure />', () => {

    const props: React.ComponentProps<typeof FormStructure> = {
        formSubmitHandler: (e) => {}, 
        onEmailChange: (e) => {}, 
        onPasswordChange: (e) => {}, 
        emailValidationInfo: 'Mail validation info',
        passwordValidationInfo: 'Password validation info',
        loginStatus: LoginStatus.NOT_LOGGED_IN,
    };

    it('matches snapshot', () => {
        const wrapper = shallow(<FormStructure {...props} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should render form tag with post method', () => {
        const wrapper = shallow(<FormStructure {...props} />);

        expect(wrapper.find(`form[method='POST']`)).toHaveLength(1);
    });

    it('should render 2 text inputs and one checkbox input', () => {
        const wrapper = shallow(<FormStructure {...props} />);

        expect(wrapper.find(TextInput)).toHaveLength(2);
        expect(wrapper.find(CheckboxInput)).toHaveLength(1);
    });

    it('should not render additional not authorized message', () => {
        const wrapper = shallow(<FormStructure {...props} />);

        expect(wrapper.find(ParagraphStyled)).toHaveLength(0);
    });

    it('should render additional message if login status is rejected', () => {
        props.loginStatus = LoginStatus.REJECTED;

        const wrapper = shallow(<FormStructure {...props} />);

        expect(wrapper.find(ParagraphStyled)).toHaveLength(1);

        const paragraph = wrapper.find(ParagraphStyled);
        expect(paragraph.text()).toEqual(messages.notAuthorizedInfo);
    });

});
