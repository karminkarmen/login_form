import styled from 'styled-components';
import { centerized } from '../../configs/mixins';

const CheckboxInputContainerStyled = styled.div`
    ${centerized}
    margin: ${props => props.theme.margins.normal};
`;

export default CheckboxInputContainerStyled;