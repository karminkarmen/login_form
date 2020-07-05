import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import FormStructure from '../FormStructure/FormStructure';
import AuthenticationBoxMainContainerStyled from './AuthenticationBoxMainContainerStyled';
import LoginConfirmation from '../LoginConfirmation/LoginConfirmation';
import { formValidator } from '../../validation/formValidator';
import loginHandler from '../../apiMock/loginHandler';
import { LoginStatus } from '../../constants/statusesConsts';

const AuthenticationBox: React.FC = () => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [emailValidationInfo, setEmailValidationInfo] = React.useState('');
    const [passwordValidationInfo, setPasswordValidationInfo] = React.useState('');
    const [loginStatus, setLoginStatus] = React.useState(LoginStatus.NOT_LOGGED_IN);

    const { validateEmail, validatePassword } = formValidator();

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailValidationOutput = validateEmail(email);
        const passwordValidationOutput = validatePassword(password);

        setPasswordValidationInfo(passwordValidationOutput);
        setEmailValidationInfo(emailValidationOutput);

        if (emailValidationOutput.length === 0 && passwordValidationOutput.length === 0) {
            loginHandler(email, password)
                .then((res: unknown | PromiseLike<void>) => setLoginStatus(LoginStatus.AUTHORIZED))
                .catch(e => setLoginStatus(LoginStatus.REJECTED));
        }
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <ThemeProvider theme={theme}>
            <AuthenticationBoxMainContainerStyled>
                { (loginStatus === LoginStatus.REJECTED || loginStatus === LoginStatus.NOT_LOGGED_IN) && 
                    <FormStructure 
                        formSubmitHandler={formSubmitHandler}
                        onEmailChange={onEmailChange} 
                        onPasswordChange={onPasswordChange} 
                        emailValidationInfo={emailValidationInfo} 
                        passwordValidationInfo={passwordValidationInfo}
                        loginStatus={loginStatus}
                    />
                }
                {(loginStatus === LoginStatus.AUTHORIZED) && <LoginConfirmation />}
            </AuthenticationBoxMainContainerStyled>
        </ThemeProvider>
    );
};

export default AuthenticationBox;
