import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddLink from './AddLink'

describe(`AddLink component`, () => {
  const stubCategories = [
    {
      "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Important"
    },
    {
      "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Super"
    },
    {
      "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Spangley"
    }
  ]

  it('renders the complete form', () => {
    const wrapper = shallow(<AddLink />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't support React.createContext
  it.skip('renders the select options from categories', () => {
    const context = { categories: stubCategories }
    const select = shallow(<AddLink />, context)
      .find('#link-category-select')
    expect(toJson(select)).toMatchSnapshot()
  })
})
