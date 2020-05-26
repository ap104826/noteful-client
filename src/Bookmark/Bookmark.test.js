import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Link from './Link'

describe(`Bookmark component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    modified: new Date(2018, 12, 15),
  }

  it('renders a .Bookmark by default', () => {
    const wrapper = shallow(<Bookmark />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Boomark given props', () => {
    const wrapper = shallow(<Bookmark {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
