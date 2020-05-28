import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '../Link/Link'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { getLinksForCategory } from '../links-helpers'
import './LinkListMain.css'

export default class LinkListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { category_id } = this.props.match.params
    const { links = [] } = this.context
    const linksForCategories = getLinksForCategories(links, category_id)
    return (
      <section className='LinkListMain'>
        <ul>
          {linksForCategories.map(link =>
            <li key={link.id}>
              <Link
                id={link.id}
                name={link.name}
                modified={link.modified}
              />
            </li>
          )}
        </ul>
        <div className='LinkListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-link'
            type='button'
            className='LinkListMain__add-link-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Link
          </CircleButton>
        </div>
      </section>
    )
  }
}
