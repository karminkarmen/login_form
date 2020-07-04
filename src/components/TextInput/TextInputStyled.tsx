import styled from 'styled-components';

type Props = {
    label: string, 
    type: string
};

const InputStyled = styled.input.attrs((props: Props) => ({
    type: props.type,
    name: props.label,
    id: props.label
}))<Props>`
    font-size: ${props => props.theme.fontSizes.medium};
    border-radius: ${props => props.theme.radius.medium};
    border: 2px solid ${props => props.theme.colors.main};
    padding: ${props => props.theme.paddings.medium};
    background: transparent;
    color: ${props => props.theme.colors.secondaryLightest};
    margin-bottom: 1rem;

    ::placeholder {
        color: ${props => props.theme.colors.background};
    }

    &:focus {
        outline: none;
        background: ${props => props.theme.colors.secondaryLighten};
        color: ${props => props.theme.colors.main};
    }
`;

export default InputStyled;