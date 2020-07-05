import styled from 'styled-components';
import { Tick } from '@styled-icons/typicons';
import { innerWidthSize } from '../../constants/themeConsts';

export const TickStyled = styled(Tick)`
    color: ${props => props.theme.colors.main};
    height: ${innerWidthSize / 2}px;
`
export default TickStyled;
