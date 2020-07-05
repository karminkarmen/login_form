import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../configs/theme';

const mountWithTheme = (child: React.ReactElement) => {
    return mount(child, {
        wrappingComponent: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    });
}

export default mountWithTheme;