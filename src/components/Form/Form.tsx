import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import FormStructure from '../FormStructure/FormStructure';
import FormMainContainerStyled from './FormMainContainerStyled';
import LoginConfirmation from '../LoginConfirmation/LoginConfirmation';
import { validateForm } from '../../validation/formValidation';
import loginHandler from '../../apiMock/loginHandler';
import { loginStatuses } from '../../constants/statusesConsts';

const Form: React.FC = () => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [emailValidationInfo, setEmailValidationInfo] = React.useState('');
    const [passwordValidationInfo, setPasswordValidationInfo] = React.useState('');
    const [loginStatus, setLoginStatus] = React.useState(loginStatuses.NOT_LOGGED_IN);

    const validator = validateForm();

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailValidationOutput = validator.validateEmail(email);
        const passwordValidationOutput = validator.validatePassword(password);

        setPasswordValidationInfo(passwordValidationOutput);
        setEmailValidationInfo(emailValidationOutput);

        if (emailValidationOutput.length === 0 && passwordValidationOutput.length === 0) {
            loginHandler(email, password)
                .then((res: unknown | PromiseLike<void>) => setLoginStatus(loginStatuses.AUTHORIZED))
                .catch(e => setLoginStatus(loginStatuses.REJECTED));
        }
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <ThemeProvider theme={theme}>
            <FormMainContainerStyled>
            { (loginStatus === loginStatuses.REJECTED || loginStatus === loginStatuses.NOT_LOGGED_IN) && 
                <FormStructure 
                    formSubmitHandler={formSubmitHandler}
                    onEmailChange={onEmailChange} 
                    onPasswordChange={onPasswordChange} 
                    emailValidationInfo={emailValidationInfo} 
                    passwordValidationInfo={passwordValidationInfo}
                    loginStatus={loginStatus}
                />
            }
            {(loginStatus === loginStatuses.AUTHORIZED) && <LoginConfirmation />}
            </FormMainContainerStyled>
        </ThemeProvider>
    );
};

export default Form;
