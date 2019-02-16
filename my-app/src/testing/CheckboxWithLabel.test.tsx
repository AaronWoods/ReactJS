import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import { CheckboxWithLabel } from './CheckboxWithLabel';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new Adapter()});

test('checkbox changes after a click', () => {
    
    const checkbox = shallow(<CheckboxWithLabel labelOn="ON" labelOff="OFF" />)
    
    expect(checkbox.text()).toEqual("OFF");

    checkbox.find("input").simulate("change");

    expect(checkbox.text()).toEqual("ON");

})