import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { findLink, findCategory } from '../links-helpers'
import './LinkPageNav.css'

export default class LinkPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { links, categories, } = this.context
    const { linkId } = this.props.match.params
    const link = findLink(links, linkId) || {}
    const categories = findCategory(categories, link.category_id)
    return (
      <div className='LinkPageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='LinkPageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {category && (
          <h3 className='LinkPageNav__category-name'>
            {category.name}
          </h3>
        )}
      </div>
    )
  }
}
