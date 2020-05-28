import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LinkPageNav from './LinkPageNav'

describe(`LinkPageNav component`, () => {
  it('renders a .LinkPageNav by default', () => {
    const wrapper = shallow(<LinkPageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't support React.createContext
  it.skip('renders a h3 with category name when in props', () => {
    const props = {
      match: {
        params: {
          linkId: 'test-link-id'
        }
      }
    }
    const context = {
      links: [{ id: 'test-link-id', category_id: 'test-category-id' }],
      categories: [{ id: 'test-category-id', name: 'Important' }]
    }

    const h3 = shallow(<LinkPageNav {...props} />, context)
      .find('.LinkPageNav__category-name')
    expect(toJson(h3)).toMatchSnapshot()
  })
})
