import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { findBookmark, findCategory } from '../bookmarks-helpers'
import './BookmarkPageNav.css'

export default class BookmarkPageNav extends React.Component {
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
    const { bookmarks, categories } = this.context
    const { bookmarkId } = this.props.match.params
    const bookmark = findBookmark(bookmarks, bookmarkId) || {}
    const category = findCategory(categories, bookmark.category_id)
    return (
      <div className='BookmarkPageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='BookmarkPageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {category && (
          <h3 className='BookmarkPageNav__category-name'>
            {category.name}
          </h3>
        )}
      </div>
    )
  }
}
