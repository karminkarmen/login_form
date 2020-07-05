import React from 'react';
import mountWithTheme from '../../../helpers/mountWithTheme';
import LabelStyled from '../LabelStyled';

describe('<LabelStyled />', () => {

    const props: React.ComponentProps<typeof LabelStyled> = {
        target: 'remember',
        isUppercased: true,
    };

    it('matches snapshot', () => {
        const wrapper = mountWithTheme(<LabelStyled {...props} />);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render label html tag with specified for and target properties', () => {
        const wrapper = mountWithTheme(<LabelStyled {...props} />);

        expect(wrapper.find(`label[target='${props.target}']`)).toHaveLength(1);
        expect(wrapper.find(`label[target='${props.target}']`)).toHaveLength(1);
    });

});
