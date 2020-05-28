import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Link from './Link'

describe(`Link component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    modified: new Date(2018, 12, 15),
  }

  it('renders a .Link by default', () => {
    const wrapper = shallow(<Link />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Link given props', () => {
    const wrapper = shallow(<Link {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
