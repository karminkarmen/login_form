import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Tick } from '@styled-icons/typicons';
import theme from '../../configs/theme';
import ParagraphStyled from '../common/ParagraphStyled';
import { innerWidthSize } from '../../constants/themeConsts';
import messages from '../../constants/messagesConsts';

export const StyledTick = styled(Tick)`
    color: ${props => props.theme.colors.main};
    height: ${innerWidthSize / 2}px;
`
const LoginConfirmation: React.FC = () => (
    <ThemeProvider theme={theme}>
        <StyledTick />
        <ParagraphStyled bigFontSize textSpace>
            {messages.loggedInConfirmationInfo}
        </ParagraphStyled>
    </ThemeProvider>
);

export default LoginConfirmation;
