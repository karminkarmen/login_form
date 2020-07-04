import styled from 'styled-components';
import { centered } from '../../configs/mixins';
import { innerWidthSize } from '../../constants/themeConsts';

const LoginButtonContainerStyled = styled.div`
    ${centered}
    position: relative;
    width: ${innerWidthSize / 2}px;
    height: ${innerWidthSize / 2}px;
    left: ${innerWidthSize + 10}px;
    top: -130px;
    border-radius: ${props => props.theme.radius.maximum};
    background: ${props => props.theme.colors.main};
    transition: ${props => props.theme.transitionTime.default};

    &:hover {
        background-color: ${props => props.theme.colors.secondaryLighten};
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`;

export default LoginButtonContainerStyled;
