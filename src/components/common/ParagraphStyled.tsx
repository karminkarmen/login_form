import styled from 'styled-components';

type Props = {
    bigFontSize?: boolean,
    textSpace?: boolean,
}

const ParagraphStyled = styled.p<Props>`
    margin: 0 0 ${props => props.theme.margins.normal} 0;
    max-width: ${props => props.theme.width.innerElementWidth};
    color: ${props => props.theme.colors.main};
    letter-spacing: ${props => props.textSpace ? props.theme.letterSpacing.normal : 'normal'};
    font-size: ${props => props.bigFontSize ? props.theme.fontSizes.big : props.theme.fontSizes.normal};
    font-family: ${props => props.theme.fontFamilies.main}, sans-serif;
`;

export default ParagraphStyled;
