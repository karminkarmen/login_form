import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './components/Form/Form';
import theme from './configs/theme';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => (props.theme.colors.background)};
        margin: 0;
    }
`

const AppStyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

class App extends Component {
    render() {
        return (
            <AppStyledDiv className="App">
                <GlobalStyle theme={theme} />
                <Form />
            </AppStyledDiv>
        );
    }
}

export default App;