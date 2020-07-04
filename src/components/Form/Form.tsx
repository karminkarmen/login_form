import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import FormContainerStyled from './FormContainerStyled';
import FieldsetStyled from '../common/FieldsetStyled';
import LabelStyled from '../common/LabelStyled'
import LoginButton from '../LoginButton/LoginButton';
import TextInput from '../TextInput/TextInput';
import { validateForm } from '../../validation/formValidation';
import loginHandler from '../../apiMock/loginHandler';

const Form: React.FC = () => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [emailInfo, setEmailInfo] = React.useState('');
    const [passwordInfo, setPasswordInfo] = React.useState('');
    const [isLoggedIn, setIfLogged] = React.useState(false);

    const validator = validateForm();

    const formSubmitHandler = (e: any) => {
        e.preventDefault();

        const emailValidationOutput = validator.validateEmail(email);
        const passwordValidationOutput = validator.validatePassword(password);

        setPasswordInfo(passwordValidationOutput);
        setEmailInfo(emailValidationOutput);

        loginHandler(email, password)
            .then((res: unknown | PromiseLike<void>) => console.log(res))
            .catch(e => console.log(e));
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <ThemeProvider theme={theme}>
            <form 
                method="POST" 
                action="" 
                onSubmit={formSubmitHandler} >
                <FieldsetStyled>
                    <FormContainerStyled theme={theme}>
                        <TextInput 
                            handler={onEmailChange} 
                            label={'email'} 
                            type={'text'} 
                            validationInfo={emailInfo} />
                        <TextInput 
                            handler={onPasswordChange} 
                            label={'password'} 
                            type={'password'} 
                            validationInfo={passwordInfo} />
                        <div>
                            <input type="checkbox" name="remember" id="remember" />
                            <LabelStyled 
                                target={'remember'} 
                                isUppercased={false} >
                                Remember me
                            </LabelStyled>
                        </div>
                    </FormContainerStyled>
                    <LoginButton />
                </FieldsetStyled>
            </form>
        </ThemeProvider>
    );
};

export default Form;


