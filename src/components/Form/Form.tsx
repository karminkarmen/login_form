import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import FormContainerStyled from './FormContainerStyled';
import FieldsetStyled from '../common/FieldsetStyled';
import LabelStyled from '../common/LabelStyled'
import LoginButton from '../LoginButton/LoginButton';
import TextInput from '../TextInput/TextInput';
import { validateForm } from '../../validation/formValidation';

const Form: React.FC = () => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [emailInfo, setEmailInfo] = React.useState('');
    const [passwordInfo, setPasswordInfo] = React.useState('');

    const validator = validateForm();

    const btnHandler= () => {
        const emailValidationOutput = validator.validateEmail(email);
        const passwordValidationOutput = validator.validatePassword(password);

        setPasswordInfo(passwordValidationOutput);
        setEmailInfo(emailValidationOutput);
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <ThemeProvider theme={theme}>
            <form method="POST" action="">
                <FieldsetStyled>
                    <FormContainerStyled theme={theme}>
                        <TextInput 
                            handler={onEmailChange} 
                            label={'email'} 
                            type={'email'} 
                            validationInfo={emailInfo} 
                        />
                        <TextInput 
                            handler={onPasswordChange} 
                            label={'password'} 
                            type={'password'} 
                            validationInfo={passwordInfo} 
                        />
                        <div>
                            <input type="checkbox" name="remember" id="remember" />
                            <LabelStyled for={'remember'} isUppercased={false}>Remember me</LabelStyled>
                        </div>
                    </FormContainerStyled>
                    <LoginButton btnHandler={btnHandler}/>
                </FieldsetStyled>
            </form>
        </ThemeProvider>
    );
};

export default Form;


