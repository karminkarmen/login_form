import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import LoginButtonStyled from './LoginButtonStyled';
import LoginButtonContainerStyled from './LoginButtonContainerStyled';

type Props = {
    btnHandler: () => void;
}

const LoginButton: React.FC<Props> = ({btnHandler}) => {
    return (
        <ThemeProvider theme={theme}>
            <LoginButtonContainerStyled onClick={btnHandler}>
                <LoginButtonStyled />
            </LoginButtonContainerStyled>
        </ThemeProvider>
    );
};

export default LoginButton;