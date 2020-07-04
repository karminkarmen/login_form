import { innerWidthSize } from '../constants/themeConsts';

const theme = {
    colors: {
        main: '#F6DADF',
        secondary: '#9B1B3B',
        secondaryLighten: '#C2224A',
        secondaryLightest: '#F6E0E5',
        background: '#FF4653',
    },
    radius: {
        small: '3px',
        medium: '20px',
        maximum: '100%',
    },
    margins: {
        normal: '10px',
    },
    paddings: {
        medium: '0.5em 2em',
    },
    fontSizes: {
        normal: '0.8rem',
        medium: '1rem',
        big: '1.5rem',
    },
    fontFamilies: {
        main: 'Lato', 
    },
    transitionTime: {
        default: '0.3s'
    },
    letterSpacing: {
        normal: '0.2rem'
    },
    width: {
        mainElementWidth: '500px',
        innerElementWidth: `${innerWidthSize}px`,
    }
};

export default theme;
