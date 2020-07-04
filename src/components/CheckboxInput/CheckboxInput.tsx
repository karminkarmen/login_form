import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import LabelStyled from '../common/LabelStyled';
import CheckboxInputContainerStyled from './CheckboxInputContainerStyled';

export type Props = {
    name: string;
    label: string;
}

const CheckboxInput: React.FC<Props> = ({ name, label }) => (
    <ThemeProvider theme={theme}>
        <CheckboxInputContainerStyled>
            <input type="checkbox" name={name} id={name} />
            <LabelStyled 
                target={name} 
                isUppercased={false} 
            >
                {label}
            </LabelStyled>
        </CheckboxInputContainerStyled> 
    </ThemeProvider>
);

export default CheckboxInput;
