import styled from 'styled-components';

type Props = {
    for: string;
    isUppercased: boolean;
}

const LabelStyled = styled.label.attrs((props: Props) => ({
    for: props.for
}))<Props>`
    margin: ${props => props.theme.margins.normal};
    color: ${props => props.theme.colors.main};
    text-transform: ${props => props.isUppercased ? 'uppercase' : 'none'};
    font-weight: bold;
    letter-spacing: ${props => props.theme.letterSpacing.normal};
    font-size: ${props => props.theme.fontSizes.normal};
    font-family: ${props => props.theme.fontFamilies.lato};
`;

export default LabelStyled;