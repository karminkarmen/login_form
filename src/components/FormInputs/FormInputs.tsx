import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import FormContainerStyled from './FormInputsContainerStyled';
import FieldsetStyled from '../common/FieldsetStyled';
import LabelStyled from '../common/LabelStyled';
import LoginButton from '../LoginButton/LoginButton';
import TextInput from '../TextInput/TextInput';

type Props = {
    formSubmitHandler: (e: any) => void, 
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    emailInfo: string
    passwordInfo: string,
}

const FormInputs: React.FC<Props> = ({ formSubmitHandler, onEmailChange, emailInfo, onPasswordChange, passwordInfo }) => {
    return (
        <ThemeProvider theme={theme}>
            <form 
                method="POST" 
                action="" 
                onSubmit={formSubmitHandler} 
            >
                <FieldsetStyled>
                    <FormContainerStyled theme={theme}>
                        <TextInput 
                            handler={onEmailChange} 
                            label={'email'} 
                            type={'text'} 
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
                            <LabelStyled 
                                target={'remember'} 
                                isUppercased={false} 
                            >
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

export default FormInputs;


