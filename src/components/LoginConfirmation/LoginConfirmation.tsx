import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import ParagraphStyled from '../common/ParagraphStyled';

const LoginConfirmation: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <ParagraphStyled>login successful</ParagraphStyled>
        </ThemeProvider>
    );
};

export default LoginConfirmation;