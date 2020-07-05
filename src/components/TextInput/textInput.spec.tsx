import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';
import LabelStyled from '../common/LabelStyled';
import TextInputStyled from './TextInputStyled';
import ParagraphStyled from '../common/ParagraphStyled';

describe('<CheckboxInput />', () => {

    const props: React.ComponentProps<typeof TextInput> = {
        handler: (e: React.ChangeEvent<HTMLInputElement>) => {},
        label: 'login',
        type: 'password',
        validationInfo: 'Validation info',
    };

    it('matches snapshot', () => {
        const formattingButtons = shallow(<TextInput {...props} />);
        expect(formattingButtons.debug()).toMatchSnapshot();
    });

    it('should render styled label', () => {
        const wrapper = shallow(<TextInput {...props} />);

        expect(wrapper.find(LabelStyled)).toHaveLength(1);
    });

    it('should render styled label connected with the input', () => {
        const wrapper = shallow(<TextInput {...props} />);

        const label = wrapper.find(LabelStyled);
        expect(label.find({ target: props.label })).toHaveLength(1);
    });

    it('should render styled label which contains provided text', () => {
        const wrapper = shallow(<TextInput {...props} />);

        const label = wrapper.find(LabelStyled);
        expect(label.text()).toEqual(props.label);
    });

    it('should render styled input', () => {
        const wrapper = shallow(<TextInput {...props} />);

        expect(wrapper.find(TextInputStyled)).toHaveLength(1);
    });

    it('should render styled paragraph', () => {
        const wrapper = shallow(<TextInput {...props} />);

        expect(wrapper.find(ParagraphStyled)).toHaveLength(1);
    });

    it('should render styled paragraph with error info if provided', () => {
        const wrapper = shallow(<TextInput {...props} />);

        const label = wrapper.find(ParagraphStyled);
        expect(label.text()).toEqual(props.validationInfo);
    });

    it('should not render styled paragraph with error info if it is not provided', () => {
        props.validationInfo = '';
        const wrapper = shallow(<TextInput {...props} />);

        expect(wrapper.find(ParagraphStyled)).toHaveLength(0);
    });
});
