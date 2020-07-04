import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import LoginButtonStyled from './LoginButtonStyled';
import LoginButtonContainerStyled from './LoginButtonContainerStyled';

const LoginButton: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <LoginButtonContainerStyled>
                <LoginButtonStyled />
            </LoginButtonContainerStyled>
        </ThemeProvider>
    );
};

export default LoginButton;