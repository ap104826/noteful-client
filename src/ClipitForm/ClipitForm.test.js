import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ClipitForm from './ClipitForm'

describe(`ClipitForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.ClipitForm by default', () => {
    const wrapper = shallow(<ClipitForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the ClipitForm given props', () => {
    const wrapper = shallow(<ClipitForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
