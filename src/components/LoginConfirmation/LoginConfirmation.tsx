import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import ParagraphStyled from '../common/ParagraphStyled';
import messages from '../../constants/messagesConsts';
import { TickStyled } from './TickStyled';

const LoginConfirmation: React.FC = () => (
    <ThemeProvider theme={theme}>
        <TickStyled />
        <ParagraphStyled bigFontSize textSpace>
            {messages.loggedInConfirmationInfo}
        </ParagraphStyled>
    </ThemeProvider>
);

export default LoginConfirmation;
