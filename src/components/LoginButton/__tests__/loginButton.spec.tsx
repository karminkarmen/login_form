import React from 'react';
import { shallow } from 'enzyme';

import LoginButton from '../LoginButton';
import LoginButtonContainerStyled from '../LoginButtonContainerStyled';
import LoginButtonStyled from '../LoginButtonStyled';

describe('<LoginButton />', () => {

    it('matches snapshot', () => {
        const wrapper = shallow(<LoginButton />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should render login button container', () => {
        const wrapper = shallow(<LoginButton />);

        expect(wrapper.find(LoginButtonContainerStyled)).toHaveLength(1);
    });

    it('should render styled login button', () => {
        const wrapper = shallow(<LoginButton />);

        expect(wrapper.find(LoginButtonStyled)).toHaveLength(1);
    });

});
