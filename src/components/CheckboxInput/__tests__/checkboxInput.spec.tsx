import React from 'react';
import { shallow } from 'enzyme';

import CheckboxInput from '../CheckboxInput';
import LabelStyled from '../../common/LabelStyled';
import CheckboxInputContainerStyled from '../CheckboxInputContainerStyled';

describe('<CheckboxInput />', () => {

    const props: React.ComponentProps<typeof CheckboxInput> = {
        name: 'remember',
        label: 'Remember me',
    };

    it('matches snapshot', () => {
        const wrapper = shallow(<CheckboxInput {...props} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should render input with checkbox type', () => {
        const wrapper = shallow(<CheckboxInput {...props} />);

        expect(wrapper.find(`input[type='checkbox']`)).toHaveLength(1);
    });

    it('should render input with specified name and id', () => {
        const wrapper = shallow(<CheckboxInput {...props} />);

        expect(wrapper.find(`input[name='${props.name}']`)).toHaveLength(1);
        expect(wrapper.find(`input[id='${props.name}']`)).toHaveLength(1);
    });

    it('should render styled label', () => {
        const wrapper = shallow(<CheckboxInput {...props} />);

        expect(wrapper.find(LabelStyled)).toHaveLength(1);
    });

    it('should render styled label connected with checkbox', () => {
        const wrapper = shallow(<CheckboxInput {...props} />);

        const label = wrapper.find(LabelStyled);
        expect(label.find({ target: props.name })).toHaveLength(1);
    });

    it('should render styled label which contains provided text', () => {
        const wrapper = shallow(<CheckboxInput {...props} />);

        const label = wrapper.find(LabelStyled);
        expect(label.text()).toEqual(props.label);
    });

    it('should render styled contianer', () => {
        const wrapper = shallow(<CheckboxInput {...props} />);

        expect(wrapper.find(CheckboxInputContainerStyled)).toHaveLength(1);
    });
});
