import React from 'react';
import mountWithTheme from '../../../helpers/mountWithTheme';
import TextInputStyled from '../TextInputStyled';

describe('<TextInputStyled />', () => {

    const props: React.ComponentProps<typeof TextInputStyled> = {
        label: 'remember', 
        type: 'password'
    };

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<TextInputStyled {...props} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should render label html tag with specified type, name and id properties', () => {
        const wrapper = mountWithTheme(<TextInputStyled {...props} />);

        expect(wrapper.find(`input[type='${props.type}']`)).toHaveLength(1);
        expect(wrapper.find(`input[name='${props.label}']`)).toHaveLength(1);
        expect(wrapper.find(`input[name='${props.label}']`)).toHaveLength(1);
    });

});
