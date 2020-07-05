import React from 'react';
import { shallow } from 'enzyme';

import AuthenticationBox from '../AuthenticationBox';
import FormStructure from '../../FormStructure/FormStructure';
import LoginConfirmation from '../../LoginConfirmation/LoginConfirmation';
import AuthenticationBoxMainContainerStyled from '../AuthenticationBoxMainContainerStyled';
import { LoginStatus } from '../../../constants/statusesConsts';

describe('<AuthenticationBox />', () => {

    const props: React.ComponentProps<typeof AuthenticationBox> = {
        loginStatus: LoginStatus.NOT_LOGGED_IN,
        setLoginStatus: (loginStatus: LoginStatus) => {},
    };

    it('matches snapshot', () => {
        const wrapper = shallow(<AuthenticationBox {...props} />);

        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should not display confirmation panel if user is not logged in', () => {
        const wrapper = shallow(<AuthenticationBox {...props} />);

        expect(wrapper.find(LoginConfirmation)).toHaveLength(0);
    });

    it('should display box container', () => {
        const wrapper = shallow(<AuthenticationBox {...props} />);

        expect(wrapper.find(AuthenticationBoxMainContainerStyled)).toHaveLength(1);
    });

    it('should not display form container if user is logged in and show confirmation', () => {
        const editedProps = { ...props, loginStatus: LoginStatus.AUTHORIZED }
        const wrapper = shallow(<AuthenticationBox {...editedProps} />);

        expect(wrapper.find(LoginConfirmation)).toHaveLength(1);
        expect(wrapper.find(FormStructure)).toHaveLength(0);
    });

    it('should have proper initial props for form structure', () => {
        const wrapper = shallow(<AuthenticationBox {...props} />);

        expect(wrapper.find(FormStructure).props()).toEqual(
            {
                formSubmitHandler: expect.any(Function),
                onEmailChange: expect.any(Function),
                onPasswordChange: expect.any(Function),
                emailValidationInfo: '',
                passwordValidationInfo: '',
                loginStatus: 'NOT_LOGGED_IN'
            }
        )
    });

});
