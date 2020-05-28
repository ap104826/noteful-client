import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'
import './Link.css'

export default class Link extends React.Component {
  static defaultProps ={
    onDeleteLink: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const linkId = this.props.id

    fetch(`${config.API_ENDPOINT}/links/${linkId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteLink(linkId)
        // allow parent to perform extra behaviour
        this.props.onDeleteLink(linkId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, modified } = this.props
    return (
      <div className='Link'>
        <h2 className='Link__title'>
          <Link to={`/link/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Link__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Link__dates'>
          <div className='Link__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
