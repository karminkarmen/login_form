import React from 'react';
import { shallow } from 'enzyme';

import AuthenticationBox from '../AuthenticationBox';
import FormStructure from '../../FormStructure/FormStructure';
import LoginConfirmation from '../../LoginConfirmation/LoginConfirmation';
import AuthenticationBoxMainContainerStyled from '../AuthenticationBoxMainContainerStyled';

describe('<AuthenticationBox />', () => {

    it('matches snapshot', () => {
        const wrapper = shallow(<AuthenticationBox />);

        console.log(wrapper.dive().html())
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should not display confirmation panel if user is not logged in', () => {
        const wrapper = shallow(<AuthenticationBox />);

        expect(wrapper.find(LoginConfirmation)).toHaveLength(0);
    });

    it('should display form container', () => {
        const wrapper = shallow(<AuthenticationBox />);

        expect(wrapper.find(AuthenticationBoxMainContainerStyled)).toHaveLength(1);
    });

    it('should have proper initial props for form structure', () => {
        const wrapper = shallow(<AuthenticationBox />);

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
