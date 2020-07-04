import styled from 'styled-components';
import { centered } from '../../configs/mixins';

const CheckboxInputContainerStyled = styled.div`
    ${centered}
    margin: ${props => props.theme.margins.normal};
`;

export default CheckboxInputContainerStyled;
