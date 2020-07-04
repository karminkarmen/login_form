import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import FormContainerStyled from './FormStructureStyled';
import FieldsetStyled from '../common/FieldsetStyled';
import LoginButton from '../LoginButton/LoginButton';
import TextInput from '../TextInput/TextInput';
import { loginStatuses } from '../../constants/statusesConsts';
import ParagraphStyled from '../common/ParagraphStyled';
import CheckboxInput from '../CheckboxInput/CheckboxInput';

type Props = {
    formSubmitHandler: (e: any) => void, 
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    emailValidationInfo: string
    passwordValidationInfo: string,
    loginStatus: loginStatuses,
}

const FormStructure: React.FC<Props> = ({ 
    formSubmitHandler, 
    onEmailChange, 
    emailValidationInfo, 
    onPasswordChange, 
    passwordValidationInfo, 
    loginStatus 
}) => {
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
                            validationInfo={emailValidationInfo} 
                        />
                        <TextInput 
                            handler={onPasswordChange} 
                            label={'password'} 
                            type={'password'} 
                            validationInfo={passwordValidationInfo} 
                        />
                        <CheckboxInput 
                            name={'remember'}
                            label={'Remember me'}
                        />
                        { loginStatus === loginStatuses.REJECTED && <ParagraphStyled>Invalid email or password</ParagraphStyled>}
                    </FormContainerStyled>
                    <LoginButton />
                </FieldsetStyled>
            </form> 
        </ThemeProvider>
    );
};

export default FormStructure;


