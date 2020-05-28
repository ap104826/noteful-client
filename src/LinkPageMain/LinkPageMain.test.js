import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LinkPageMain from './LinkPageMain'

describe(`LinkPageMain component`, () => {
  it('renders a .LinkPageMain by default', () => {
    const wrapper = shallow(<LinkPageMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't yet support React.createContext
  it.skip('renders a Link with link prop', () => {
    const props = {
      match: {
        params: {
          linkId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
      }
    }
    const context = {
      links: [{
        id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
        name: `Dogs`,
        modified: `2019-01-03T00:00:00.000Z`,
        // category_id: b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1,
        content: "Corporis accusamus placeat.\n \rUnde."
      }]
    }
    const link = shallow(<LinkPageMain {...props} />, context)
      .find('Link')
    expect(toJson(link)).toMatchSnapshot()
  })

  // enzyme doesn't yet support React.createContext
  it.skip(`splits the content by \\n or \\n\\r, with a p foreach`, () => {
    const props = {
      match: {
        params: {
          linkId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
      }
    }

    const linksContextWithDifferentContent = [
      {
        links: [
          {
            id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
            content: "Content with n r.\n \rafter n r.",
          }
        ]
      },
      {
        links: [
          {
            id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
            content: "Content with n.\nafter."
          }
        ]
      }
    ]

    linksContextWithDifferentContent.forEach(context => {
      const content = shallow(<LinkPageMain {...props} />, context)
        .find('LinkPageMain__content')
      expect(toJson(content)).toMatchSnapshot()
    })
  })
})
