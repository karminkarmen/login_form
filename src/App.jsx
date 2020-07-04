import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Form from './components/Form/Form';
import theme from './configs/theme';
import { centerized } from './configs/mixins';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => (props.theme.colors.background)};
        margin: 0;
    }
`
const AppStyledContainer = styled.div`
    ${centerized}
    height: 100vh;
`;

class App extends Component {
    render() {
        return (
            <AppStyledContainer className="App">
                <GlobalStyle theme={theme} />
                <Form />
            </AppStyledContainer>
        );
    }
}

export default App;