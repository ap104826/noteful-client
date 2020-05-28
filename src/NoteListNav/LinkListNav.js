import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { countLinksForCategory } from '../links-helpers'
import './LinkListNav.css'

export default class LinkListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { categories = [], links = [] } = this.context
    return (
      <div className='LinkListNav'>
        <ul className='LinkListNav__list'>
          {Categories.map(category =>
            <li key={category.id}>
              <NavLink
                className='LinkListNav__category-link'
                to={`/category/${category.id}`}
              >
                <span className='LinkListNav__num-links'>
                  {countLinksForCategory(links, category.id)}
                </span>
                {category.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='LinkListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/add-category'
            type='button'
            className='LinkListNav__add-category-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Category
          </CircleButton>
        </div>
      </div>
    )
  }
}
