import styled from 'styled-components';
import LoginButtonContainerStyled from './LoginButtonContainerStyled';
import { innerWidthSize } from '../../constants/themeConsts';

const LoginButtonStyled = styled.input.attrs(props => ({
    type: 'submit',
    value: 'login'
}))`
    width: ${innerWidthSize / 2}px;
    height: ${innerWidthSize / 2}px;
    border-radius: ${props => props.theme.radius.maximum};
    border: unset;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.letterSpacing.normal};
    background: transparent;
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fontFamilies.lato};
    transition: ${props => props.theme.transitionTime.default};
    background: ${props => props.theme.colors.main};

    ${LoginButtonContainerStyled}:hover & {
        color: ${props => props.theme.colors.main};
        background-color: ${props => props.theme.colors.secondaryLighten};
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;

export default LoginButtonStyled;
