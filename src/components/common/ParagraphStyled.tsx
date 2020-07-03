import styled from 'styled-components';

const ParagraphStyled = styled.p`
    margin: 0 0 ${props => props.theme.margins.normal} 0;
    max-width: ${props => props.theme.width.innerElementWidth};
    color: ${props => props.theme.colors.main};
    font-size: ${props => props.theme.fontSizes.normal};
    font-family: ${props => props.theme.fontFamilies.lato};
`;

export default ParagraphStyled;