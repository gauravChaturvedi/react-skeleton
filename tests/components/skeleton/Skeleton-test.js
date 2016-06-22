import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Skeleton from '../../../src/components/skeleton/Skeleton.js';

describe('<Skeleton />', () => {

  it('Has a skeleton-component class', () => {
    const wrapper = shallow(<Skeleton />);
    expect(wrapper.find('.skeleton-component')).to.have.length(1);
  });

});
