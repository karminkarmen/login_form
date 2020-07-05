import styled from 'styled-components';

type Props = {
    target: string;
    isUppercased: boolean;
}

const LabelStyled = styled.label.attrs((props: Props) => ({
    htmlFor: props.target
}))<Props>`
    margin: ${props => props.theme.margins.normal};
    color: ${props => props.theme.colors.main};
    text-transform: ${props => props.isUppercased ? 'uppercase' : 'none'};
    font-weight: bold;
    letter-spacing: ${props => props.theme.letterSpacing.normal};
    font-size: ${props => props.theme.fontSizes.normal};
    font-family: ${props => props.theme.fontFamilies.main}, sans-serif;
`;

export default LabelStyled;
