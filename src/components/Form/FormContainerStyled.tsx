import styled from 'styled-components';
import { centerized } from '../../configs/mixins';

const FormContainerStyled = styled.div`
    flex-direction: column;
    ${centerized}
    border-radius:  ${props => props.theme.radius.maximum};
    background: ${props => props.theme.colors.secondary};
    transition: ${props => props.theme.transitionTime.default};
    width: ${props => props.theme.width.mainElementWidth};
    height: ${props => props.theme.width.mainElementWidth};
`;

export default FormContainerStyled;