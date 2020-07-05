import styled from 'styled-components';
import { centered } from '../../configs/mixins';

const AuthenticationBoxMainContainerStyled = styled.div`
    ${centered}
    flex-direction: column;
    border-radius:  ${props => props.theme.radius.maximum};
    background: ${props => props.theme.colors.secondary};
    width: ${props => props.theme.width.mainElementWidth};
    height: ${props => props.theme.width.mainElementWidth};
`;

export default AuthenticationBoxMainContainerStyled;
