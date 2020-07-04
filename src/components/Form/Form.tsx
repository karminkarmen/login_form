import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import FormInputs from '../FormInputs/FormInputs';
import FormMainContainerStyled from './FormMainContainerStyled';
import ParagraphStyled from '../common/ParagraphStyled';
import { validateForm } from '../../validation/formValidation';
import loginHandler from '../../apiMock/loginHandler';

enum logginStages {
    LOGGED_IN = 'LOGGED_IN',
    NOT_LOGGED_IN ='NOT_LOGGED_IN',
    REJECTED = 'REJECTED',
}

const Form: React.FC = () => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [emailInfo, setEmailInfo] = React.useState('');
    const [passwordInfo, setPasswordInfo] = React.useState('');
    const [isLoggedIn, setIfLogged] = React.useState(logginStages.NOT_LOGGED_IN);

    const validator = validateForm();

    const formSubmitHandler = (e: any) => {
        e.preventDefault();

        const emailValidationOutput = validator.validateEmail(email);
        const passwordValidationOutput = validator.validatePassword(password);

        setPasswordInfo(passwordValidationOutput);
        setEmailInfo(emailValidationOutput);

        loginHandler(email, password)
            .then((res: unknown | PromiseLike<void>) => setIfLogged(logginStages.LOGGED_IN))
            .catch(e => setIfLogged(logginStages.REJECTED));
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <ThemeProvider theme={theme}>
            <FormMainContainerStyled>
            { (isLoggedIn === logginStages.REJECTED || isLoggedIn === logginStages.NOT_LOGGED_IN) && 
                <FormInputs 
                    formSubmitHandler={formSubmitHandler}
                    onEmailChange={onEmailChange} 
                    onPasswordChange={onPasswordChange} 
                    emailInfo={emailInfo} 
                    passwordInfo={passwordInfo}
                />
            }
            {(isLoggedIn === logginStages.LOGGED_IN) && 
                <ParagraphStyled>login successful</ParagraphStyled>
            }
            </FormMainContainerStyled>
        </ThemeProvider>
    );
};

export default Form;


