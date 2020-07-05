import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AuthenticationBox from './components/AuthenticationBox/AuthenticationBox';
import theme from './configs/theme';
import { centered } from './configs/mixins';
import { LoginStatus } from './constants/statusesConsts';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => (props.theme.colors.background)};
        margin: 0;
    }
`
const AppStyledContainer = styled.div`
    ${centered}
    height: 100vh;
`;

const App = () => {
    const [loginStatus, setLoginStatus] = useState(LoginStatus.NOT_LOGGED_IN);

    return (
        <AppStyledContainer className="App">
            <GlobalStyle theme={theme} />
            <AuthenticationBox loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
        </AppStyledContainer>
    );
};

export default App;