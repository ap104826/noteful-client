import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddCategory from './AddCategory'

describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddCategory />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
