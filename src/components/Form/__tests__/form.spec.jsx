import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';
import FormStructure from '../../FormStructure/FormStructure';
import LoginConfirmation from '../../LoginConfirmation/LoginConfirmation';
import FormMainContainerStyled from '../FormMainContainerStyled';

describe('<Form />', () => {

    it('matches snapshot', () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should not display confirmation panel if user is not logged in', () => {
        const wrapper = shallow(<Form />);

        expect(wrapper.find(LoginConfirmation)).toHaveLength(0);
    });

    it('should display form container', () => {
        const wrapper = shallow(<Form />);

        expect(wrapper.find(FormMainContainerStyled)).toHaveLength(1);
    });

    it('should have proper initial props for form structure', () => {
        const wrapper = shallow(<Form />);

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
