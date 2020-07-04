import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import TextInputStyled from './TextInputStyled';
import LabelStyled from '../common/LabelStyled';
import ParagraphStyled from '../common/ParagraphStyled';

type Props = {
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    type: string;
    validationInfo: string;
}

const TextInput: React.FC<Props> = ({ handler, label, type, validationInfo }) => {
    return (
        <ThemeProvider theme={theme}>
            <LabelStyled 
                target={label}
                isUppercased={true}
            >
                {label}
            </LabelStyled>
            <TextInputStyled 
                onChange={handler} 
                type={type} 
                label={label}
            />
            {validationInfo.length > 0 && <ParagraphStyled>{validationInfo}</ParagraphStyled>} 
        </ThemeProvider>
    );
};

export default TextInput;