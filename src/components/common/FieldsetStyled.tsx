import styled from 'styled-components';

const FieldsetStyled = styled.fieldset`
    margin: unset;
    padding: unset;
    border: none;
    width: ${props => props.theme.width.mainElementWidth};
    height: ${props => props.theme.width.mainElementWidth};
`;

export default FieldsetStyled;
